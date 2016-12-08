<template>
  <div id="nav-bar">
    <h1 v-if="this.width<1024" @click="showInfo" class="book-title mobile">{{ title }}</h1>
    <h1 v-else @click="showInfo" class="book-title">{{ title }}</h1>
    <div class="chapter">
      <div class="arrow-left" v-show="chapters[chapterId].previous_chapter != null"><a v-link="{ name: 'chapter', params: { chapitre: chapterId - 1 }}"><i class="fa fa-angle-left" aria-hidden="true"></i></a></div>
      <div class="nav-chapter">Chapitre <b>{{ chapterId + 1 }}</b> / {{ chapters.length }}</div>
      <div class="arrow-right" v-show="chapters[chapterId].next_chapter != null"><a v-link="{ name: 'chapter', params: { chapitre: chapterId + 1 }}"><i class="fa fa-angle-right" aria-hidden="true"></i></a></div>
    </div>
    <div class="row">
      <h2 class="chapter-title col-xs-9">{{ chapters[chapterId].title }} <i>(15 min)</i></h2>
      <div class="col-xs-3">
        <btns-comfort></btns-comfort>
        <display-params></display-params>
      </div>
    </div>
    <!-- TopBar following -->
    <div v-show="fromTop>180">
      <div class="follow">
        <h1 v-if="this.width<1024" @click="showInfo" class="book-title mobile">{{ title }}</h1>
        <h1 v-else @click="showInfo" class="book-title">{{ title }}</h1>
        <div class="chapter">
          <div class="arrow-left" v-show="chapters[chapterId].previous_chapter != null"><a v-link="{ name: 'chapter', params: { chapitre: chapterId - 1 }}"><i class="fa fa-angle-left" aria-hidden="true"></i></a></div>
          <div v-if="this.width>1250" class="nav-chapter">Chapitre <b>{{ chapterId + 1 }}</b> / {{ chapters.length }}</div>
          <div v-if="this.width<1250" class="nav-chapter">Chap. <b>{{ chapterId + 1 }}</b> / {{ chapters.length }}</div>
          <div class="arrow-right" v-show="chapters[chapterId].next_chapter != null"><a v-link="{ name: 'chapter', params: { chapitre: chapterId + 1 }}"><i class="fa fa-angle-right" aria-hidden="true"></i></a></div>
        </div>
        <div class="right">
          <btns-comfort></btns-comfort>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import $ from 'jquery'
import BtnsComfort from './BtnsComfort.vue'
import DisplayParams from './DisplayParams.vue'

export default {
  props: {
    title: String,
    chapters: Array
  },
  route: {
    canReuse: false
  },
  components: {
    BtnsComfort,
    DisplayParams
  },
  data () {
    return {
      chapterId: parseInt(this.$route.params.chapitre),
      fromTop: 0,
      width: $(window).width()
    }
  },
  ready: function () {
    $(window).scroll(this.scrollHandler)

    var zenMode = false

    $('.zen').on('click', function () {
      $('#left-info').fadeToggle(276)
      $('#right-menu').fadeToggle(276)

      zenMode = !zenMode

      if ($(window).width() > 1024) {
        if (zenMode === true) {
          $('.side-note').fadeOut(276)
        } else if (zenMode === false) {
          $('.side-note').fadeIn(276)
        }
      }

      $('.zen').toggleClass('active-button')
    })

    $('.style').on('click', function () {
      $('#display-params').toggle()

      $('.style').toggleClass('active-button')
    })
  },
  methods: {
    showInfo: function (e) {
      let leftbar = $('.leftBar')
      leftbar.show(0, function () {
        leftbar.css('margin-left', 0)
        $('body').css('overflow-y', 'hidden')
      })
    },
    scrollHandler: function () {
      this.width = $(window).width()
      this.fromTop = $(window).scrollTop()
      if (this.fromTop > 180) {
        $('#header').css('margin-top', '-50px')
        $('.leftBar').css('padding-top', '0px')
        $('#right-menu .right-bar').css('margin-top', '-50px')
        $('#right-menu .right-content').css('margin-top', '-50px')
        $('progress').css('top', '0')

        if (this.width > 768) {
          var displayParamsTop = this.fromTop - 120
          $('#display-params').css('top', displayParamsTop)
        }
      } else {
        $('#header').css('margin-top', '0px')
        $('.leftBar').css('padding-top', '50px')
        $('#right-menu .right-bar').css('margin-top', '0px')
        $('#right-menu .right-content').css('margin-top', '0px')
        $('progress').css('top', '50px')
        $('#display-params').css('top', '20px')
      }
    }
  }
}
</script>

<style lang="sass">
$gray : #a4a4a4

#nav-bar
  text-align: center
  padding-top: 20px
  .book-title
    font-family: 'PT Serif', sans-serif
    font-size: 1.4em
    color: black
    margin: 0
    text-overflow: ellipsis
    width: 100%
    white-space: nowrap
    overflow: hidden
  .chapter-title
    margin: 0
    margin-bottom: 15px
    text-align: left
    font-family: Georgia
    font-size: 1.2em
    line-height: 1.3
    i
      font-family: 'Lato', sans-serif
      font-style: normal
      font-size: 16px
      color: $gray
  .col-xs-3
    text-align: right
  .chapter
    font-family: 'PT Serif', sans-serif
    font-size: 16px
    font-weight: normal
    margin-top: -15px
    div
      // float: left
      display: inline-block
      margin-right: 10px
    b
      color: $gray
    .arrow-right, .arrow-left
      cursor: pointer
      font-size: 2em
      transform: translateY(10%);
      a
        color: $gray
        transition: color 0.276s ease-out
        &:hover
          color: black
  .row
    margin-top: 20px
  .follow
    position: fixed
    z-index: 1
    background-color: white
    width: 680px
    top: 0px
    // top: 50px
    padding-bottom: 10px
    padding-top: 10px
    text-align: left
    .book-title
      font-size: 20px
      font-weight: bold
      max-width: 295px
      float: left
    .chapter
      margin-left: 15px
      display: inline-block
    .right
      position: absolute;
      right: 0;
      bottom: 15px;
@media (max-width: 1250px)
  #nav-bar
    .follow
      min-width: 500px
      width: 48vw
      .buttons
        margin-left: 5px
      .chapter
        margin-left: 10px
        div
          margin-right: 5px
@media (max-width: 1024px)
  #nav-bar
    padding-top: 10px
    .book-title
      font-size: 1.4em
      color: #448aff
      cursor: pointer
      &:before
        content: "←"
    .chapter-title
      font-size: 1.2em
    .chapter
      padding-top: 10px
      .arrow-left, .arrow-right
        position: fixed
        top: 50vh
        transform: translateY(-50%)
        font-size: 3em
        margin: 0
        padding: 0
        z-index: 3
      .arrow-left
        left: 14px
      .arrow-right
        right: 14px
      .nav-chapter
        margin: 0
    .follow
      min-width: 0
      width: calc(100vw - 100px)
      text-align: center
      padding: 15px 0 5px 0
      line-height: 30px
      .book-title
        max-width: 100%
      .chapter
        margin: 0
        padding: 0
        .arrow-left, .arrow-right
          display: none
        .nav-chapter
          margin: 0
@media (max-width: 768px)
  #nav-bar
    .book-title
      font-size: 1.2em
    .chapter-title
      font-size: 1.1em

.active-button
  color: #ffffff
  background-color: #448aff
</style>

<template>
  <div id="btns-mobile-notes-contents">
  	<div @click="showContents" class="btn-contents">Contenus additionnels</div>
  	<div @click="showNotes" class="btn-notes">Notes additionnelles</div>
  	<div class="txt-notes-contents">
      <div class="contents-container" v-show="selected == 'contents'">
        <reader-add-content :contents='contents'></reader-add-content>
      </div>
      <div class="notes-container" v-show="selected == 'notes'">
        <div class="note-block" @click="scrollToNote" v-for="note in notes">
          <div class="content"><b>{{ $index + 1 }}</b>. {{{ note.content }}}</div>
          <div class="link" v-if="note.type == 'link'"><a :href="note.link" target="_blank">En savoir plus.</a></div>
          <div class="media" v-if="note.type == 'video'"><iframe class="ytPlayer" :width="w" :height="h" :src="note.link" frameborder="0" allowfullscreen></iframe></div>
          <div class="media" v-if="note.type == 'image'"><img :src="note.link" width="100%" height="auto" :alt="note.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import ReaderAddContent from './ReaderAddContent.vue'

export default {
  props: {
    contents: Array,
    notes: Array
  },
  components: {
    ReaderAddContent
  },
  data () {
    return {
      selected: '',
      w: $(window).width() - 90,
      h: ($(window).width() - 90) / 1.78
    }
  },
  ready: function () {
    $(window).scroll(this.scrollHandler)
    setTimeout(function () {
      if ($('body').height() < $(window).height()) {
        $('#btns-mobile-notes-contents').css('bottom', 0)
      }
    }, 100)
  },
  methods: {
    showContents: function (e) {
      var self = this
      this.statesHandler('.btn-contents', '.btn-notes')
      $('.notes-container').fadeOut(276, function () {
        self.selected = 'contents'
        $('.contents-container').fadeIn(276)
      })
    },
    showNotes: function (e) {
      var self = this
      self.w = $('.text').width() - 90
      self.h = self.w / 1.78
      $('.note-block').css('display', 'block')
      this.statesHandler('.btn-notes', '.btn-contents')
      $('.contents-container').fadeOut(276, function () {
        self.selected = 'notes'
        $('.notes-container').fadeIn(276)
      })
    },
    statesHandler: function (actifBtnClass, otherBtnClass) {
      // changements des styles etc...
      var actifBtn = $(actifBtnClass)
      var otherBtn = $(otherBtnClass)
      var content = $('.txt-notes-contents')
      if (!content.hasClass('showTxt')) {
        content.addClass('showTxt')
      } else if (actifBtn.hasClass('clicked')) {
        content.removeClass('showTxt')
      }
      actifBtn.addClass('clicked')
      otherBtn.removeClass('clicked')
    },
    scrollToNote: function (e) {
      var id = '#nh' + $(e.target).find('b').text()
      $('html, body').animate({
        scrollTop: $(id).offset().top - 130
      }, 500)
    },
    scrollHandler: function () {
      // affichage des boutons
      if ($(window).width() < 1008) {
        var fromTop = $(window).scrollTop()
        var screenHeight = $(window).height()
        if ((fromTop + screenHeight) === $(document).height()) {
          $('#btns-mobile-notes-contents').css('bottom', 0)
          $('#mask').css('z-index', 3).fadeIn('fast')
        } else {
          $('#btns-mobile-notes-contents').css('bottom', '-50px')
          $('#mask').fadeOut('fast').css('z-index', 2)
        }
      }
    }
  }
}
</script>

<style lang="sass">
#btns-mobile-notes-contents
  display: none
@media (max-width: 1024px)
  #btns-mobile-notes-contents
    display: block
    position: fixed
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5)
    z-index: 5
    bottom: -50px
    height: auto
    width: 100%
    font-family: 'Lato', sans-serif
    font-size: 1.2em
    font-weight: bold
    color: #424242
    .btn-contents, .btn-notes
      float: left
      width: 50%
      height: 50px
      line-height: 50px
      height: 100%
      background-color: #dadada
      cursor: pointer
      position: relative
      z-index: 5
      &:first-child
        background-color: #ebebeb
      &:hover, &.clicked
        color: #448aff
    .txt-notes-contents
      height: 0px
      transition: all .276s ease-in-out
      text-align: left
      background-color: white
      color: #424242
      font-size: 0.9em
      line-height: 1.5
      padding: 0px 30px
      &.showTxt
        height: 50vh
        overflow-y: scroll
        overflow-x: hidden
        margin-right: -18px
    #add-content
      display: block
      font-size: 1.2em
      h2
        display: none
    .note-block
      cursor: pointer
      transition: background-color 0.276s ease-in-out
      &:hover
        background-color: #e4e4e4
      b
        color: #d65441
      a
        color: #448aff
      .media
        margin-top: 15px
        width: 100%
        height: auto
        text-align: center
</style>

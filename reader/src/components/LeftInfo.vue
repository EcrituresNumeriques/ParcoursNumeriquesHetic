<template>
  <div id="left-info">
    <div class="leftBar">
      <div class="homeLink">
        <a href="//parcours-numeriques.dev"><!-- <i class="fa fa-arrow-left"></i> -->← Accueil</a>
        <a v-show="width < 1024" @click="hideInfo" class="readButton">Lecture →</a>
      </div>
      <img class="bookCover" id="bookCover" :src="bookData.cover" alt="book">
      <div class="bookInfos">
        <div class="bookTitle">{{ bookData.title }}</div>
        <div class="bookTagline">{{ bookData.subtitle }}</div>
        <div class="bookAuthor">Un livre de <a href="http://parcours-numeriques.dev/writer.html">{{ bookData.author }}</a></div>
        <div class="bookRef">ISBN : {{ bookData.ISBN }}</div>
      </div>
      <div class="search">
        <input type="text" placeholder="Rechercher par mot-clés">
      </div>
      <div class="actions">
        <button class="quoteButton dropdownButton">Citer <i class="fa fa-caret-down" aria-hidden="true"></i></button>
        <button class="downloadButton dropdownButton" @click="displayDownloadPopIn">Télécharger <i class="fa fa-caret-down" aria-hidden="true"></i></button>
        <button class="buyButton">Acheter</button>
      </div>
    </div>
    <download-pop-in></download-pop-in>
  </div>
</template>

<script>
import $ from 'jquery'
import DownloadPopIn from './DownloadPopIn.vue'

export default {
  props: {
    bookData: {
      type: Object,
      default: function () { return {} }
    }
  },
  components: {
    DownloadPopIn
  },
  data () {
    return {
      width: $(window).width()
    }
  },
  methods: {
    hideInfo: function (e) {
      $('.leftBar').css('margin-left', '-100vw')
      $('body').css('overflow-y', 'auto')
    },
    handleResize: function (e) {
      if ($(window).width() < 1008) {
        $('.leftBar').css({ 'margin-left': '-100vw' })
        $('.readButton').css('display', 'block')
        $('body').css('overflow-y', 'auto')
      } else {
        $('.readButton').css('display', 'none')
        $('.leftBar').css({ 'margin-left': 0 })
        $('body').css('overflow-y', 'auto')
      }
    },
    displayDownloadPopIn: function (e) {
      $('#dl-pop-in').fadeIn('fast')
      $('#mask').css('z-index', 4)
      $('#mask').fadeIn('fast')
    }
  },
  ready: function () {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style scoped lang="sass">
.leftBar
  position: fixed
  top: 0
  left: 0
  margin-left: 0
  height: 100vh
  width: 260px
  background-color: #4a4a4a
  padding: 50px 0 0 0
  z-index: 3
  .homeLink
    font-size: 16px
    font-family: 'Lato', sans-serif
    color: #448aff
    text-align: right
    margin-top: 30px
    margin-right: 15px
    .readButton
      display: none
    a
      color: #448aff
    a:hover
      text-decoration: none
  .bookCover
    margin: 40px auto 0 auto
    width: 130px
    height: auto
  .bookInfos
    margin-right: 15px
    margin-top: 30px
    display: block
    text-align: right
    color: #FFFFFF
    a
      color: #448aff
    span
      display: inline-block
      margin-bottom: 5px
    .bookTitle
      font-size: 16px
      font-family: 'PT Serif', serif
      font-weight: bold
  .search input
    margin: 30px auto 0 auto
    background: #4a4a4a url("../../../dist/assets/search.png") 12px 6px no-repeat
    background-size: 15px
    width: 208px
    height: 30px
    border-radius: 14px
    border: solid 1px #f4f4f4
    padding: 0 15px 0 33px
    color: white
    outline: 0
  .actions
    margin: 30px
    button
      display: block
      width: 111px
      height: 30px
      margin: 0 auto
      border-radius: 14px
      color: white
      border: 1px solid #FFFFFF
      outline: 0
    .dropdownButton
      background-color: #4A4A4A
      transition: all .276s ease
      margin-bottom: 10px
      background-color: #646464
      &:hover
        background-color: #FFFFFF
        color: #4A4A4A
      i
       margin-left: 5px
    .buyButton
      margin-top: 30px
      margin-bottom: 30px
      color: #4A4A4A
      background-color: #FFFFFF
@media (max-width: 1024px)
  #left-info
    .leftBar
      display: none
      width: 100vw
      margin-left: -100vw
      z-index: 5
      text-align: left
      .homeLink
        font-size: 1.4em
        .readButton
          float: right
          margin-right: 50px
          cursor: pointer
      #bookCover
        position: relative
        left: 50%
        transform: translateX(-50%)
        text-align: left
      .bookInfos
        text-align: center
        font-size: 1.2em
        line-height: 2
        .bookTitle
          font-size: 1.4em
      .homeLink
        text-align: left
        padding-left: 50px
      .search
        display: none
      .readButton
        display: block
        margin-bottom: 30px
      .buyButton
        margin-top: 20px  
</style>

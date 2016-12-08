<template>
  <progress-bar></progress-bar>
  <div id="chapter-reader">
  <div class="chapter-text" class="">
    <reader-nav-bar :title="bookTitle" :chapters="bookChapters"></reader-nav-bar>
    <div class="text">
      {{{ bookChapters[chapterId].text }}}
    </div>

    <reader-add-content :contents='bookChapters[chapterId].additional_contents'></reader-add-content>
  </div>
  <reader-notes-col :notes='bookChapters[chapterId].additional_notes'></reader-notes-col>
  <btns-vertical-nav></btns-vertical-nav>
  <btns-mobile-notes-contents :contents='bookChapters[chapterId].additional_contents' :notes='bookChapters[chapterId].additional_notes'></btns-mobile-notes-contents>
  <div id="mask"></div>
  </div>
</template>

<script>
// import api from '../services/api.js'
// import Vue from 'vue'

import ReaderNavBar from './ReaderNavBar.vue'
import ReaderNotesCol from './ReaderNotesCol.vue'
import ReaderAddContent from './ReaderAddContent.vue'
import BtnsVerticalNav from './BtnsVerticalNav.vue'
import BtnsMobileNotesContents from './BtnsMobileNotesContents.vue'
import ProgressBar from './ProgressBar.vue'

export default {
  props: {
    bookChapters: Array,
    bookTitle: String
  },
  data () {
    return {
      data: {},
      chapterId: this.$route.params.chapitre
    }
  },
  components: {
    ReaderNavBar,
    ReaderNotesCol,
    ReaderAddContent,
    BtnsVerticalNav,
    BtnsMobileNotesContents,
    ProgressBar
  },
  route: {
    canReuse: false
  },
  ready: function () {},
  beforeDestroy: function () {
    window.scrollTo(0, 0)
  }
}
</script>

<style lang="sass">
.chapter-text
  text-align: left
  font-family: Georgia
  font-size: 1.43em
  line-height: 1.5
  color: #424242
  width: 680px
  margin-left: auto
  margin-right: auto
  .text
    transition: all .276s ease-in-out
    img
      margin-left: 50%
      transform: translateX(-50%)
    dt
      width: 100% !important
      text-align: center
      margin-top: 15px
    blockquote
      font-style: italic
    .citation_depart
      font-style: italic
      text-align: right
      margin-right: 15px
      font-size: 0.8em
      margin-bottom: 45px
      margin-top: 30px
  .text a
    color: #448aff
  .buttons
    &:hover
      color: #448aff
#mask
  background-color: #292929
  position: fixed
  width: 100vw
  height: 100vh
  opacity: 0.6
  z-index: 2
  top: 0
  left: 0
  display: none
.buttons
    font-family: 'Lato', sans-serif
    font-size: 13px
    font-weight: bold
    color: #383838
    padding: 4px 6px
    border-radius: 5px
    background-color: #e5e5e5
    cursor: pointer
    margin-left: 5px
.notes
    font-family: 'Lato', sans-serif
    display: inline-block
    
    font-size: 12px
    line-height: 20px
    vertical-align: middle
    text-align: center
    font-weight: bold
    margin-top: -30px
    margin-left: -9px
    margin-right: -9px
    cursor: pointer
    &:before
      content: "["
      color: gray
      font-size: 15px
    &:after
      content: "]"
      color: gray
      font-size: 15px
    a
      color: #d65441 !important
      &:hover
        color: #448aff !important
.note-block
  background-color: #f4f4f4
  padding: 15px
  font-size: 18px
  font-family: 'Lato', sans-serif
  margin-top: 15px
  margin-bottom: 15px
  position: relative
  display: none
  .close
    font-size: 0.7em
    width: 15px
    text-align: center
    position: absolute
    top: 0px
    right: 2px
    cursor: pointer
    color: #424242
.fa-youtube-play
  color: #d0021b

@media (max-width: 1250px)
  .chapter-text
    min-width: 500px
    width: 48vw
    margin-left: calc(260px + 30px)
    .nav-chapter
@media (max-width: 1024px)
  .chapter-text
    width: 100%
    margin: 0
    padding-left: 50px
    padding-right: 50px
    min-width: 0px
    font-size: 1.2em
    line-height: 1.9
</style>

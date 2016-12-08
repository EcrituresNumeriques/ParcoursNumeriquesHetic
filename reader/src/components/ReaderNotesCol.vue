<template>
  <div id="notes-col" class="">
    <div class="side-note" v-for="note in notes"> 
      <div class='txt'>
        <b>{{ $index + 1 }}</b>. 
        <i v-if="note.type == 'image'" class="fa fa-picture-o" aria-hidden="true"></i> 
        <i v-if="note.type == 'video'" class="fa fa-youtube-play" aria-hidden="true"></i> 
        {{{ note.content }}}</div>
      <div class="more">... <a :href="'#nb' + ($index + 1)"><i class="fa fa-plus-square" aria-hidden="true"></i></a></div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  props: {
    notes: Array
  },
  data () {
    return {
      init: false
    }
  },
  ready: function () {
    this.formatNote()
    this.$on('dataFetched', this.dataFetched)
    $(window).on('resize', this.resizeHandler)
  },
  methods: {
    formatNote: function () {
      let sideNotes = $('.side-note')
      for (let sideNote of sideNotes) {
        var content = $(sideNote).find('.txt')
        var more = $(sideNote).find('.more')
        var link = more.find('a')
        // align with note text :
        var txtNote = $('.notes a[href="' + link.attr('href') + '"]').parent('.notes')
        var fromTop = txtNote.offset().top
        $(sideNote).css('margin-top', fromTop - 47)
        $(sideNote).show()
        // check if text overflow :
        if (content[0].scrollHeight > content.innerHeight()) {
          more.css('display', 'block')
        }
        // listeners: click
        if ($('.side-note').length > 0 && !this.init) {
          $('.side-note .more a, .notes a').on('click', this.clickNote)
          this.init = true
        }
        if ($('.note-block').length > 0) {
          $('.note-block .close').off('click', this.closeNote)
          $('.note-block .close').on('click', this.closeNote)
        }
      }
    },
    clickNote: function (e) {
      // we get our notes data
      e.preventDefault()
      var noteId = $(e.target).attr('href')
      if (!noteId) {
        noteId = $(e.target).parent('a').attr('href')
      }
      var intId = noteId.match(/\d+/)[0]
      var noteData = this.notes[intId - 1]
      // Link case
      var link = ''
      if (noteData.type === 'link') {
        link = '<a href="' + noteData.link + '" target="_blank">En savoir plus.</a>'
      }
      // Video Case
      var ytPlayer = ''
      if (noteData.type === 'video') {
        var w = $('.text').width() - 30
        var h = w / 1.78
        console.log(noteData.link)
        ytPlayer = '<iframe class="ytPlayer" width="' + w + '" height="' + h + '" src="' + noteData.link + '" frameborder="0" allowfullscreen></iframe>'
      }
      // Img Case
      var img = ''
      if (noteData.type === 'image') {
        img = '<img src="' + noteData.link + '" width="100%" height="auto">'
      }
      // let's create our blockNote element
      var blockNote = $('<div id="nb' + intId + '" class="note-block"><div class="content">' + noteData.content + '</div>' + ytPlayer + img + link + '<div class="close"><i class="fa fa-times" aria-hidden="true"></i></div></div>')
      // we check if the block already appeared in the DOM
      if ($('#nb' + intId).is(':visible')) {
        $('#nb' + intId).fadeOut(276, this.formatNote)
      } else {
        // we insert it
        var txtNote = $('.notes a[href="' + noteId + '"]').parent('.notes')
        txtNote.after(blockNote)
        blockNote.fadeIn(276)
        // refresh our side-note position
        this.formatNote()
      }
    },
    closeNote: function (e) {
      var self = this
      $(e.target).parents('.note-block').fadeOut(276, function () {
        self.formatNote()
        $(this).remove()
      })
    },
    resizeHandler: function () {
      this.formatNote()
      // size of the YtPlayer
      if ($('.ytPlayer').is(':visible')) {
        var w = $('.text').width() - 30
        var h = w / 1.78
        $('.ytPlayer').width(w).height(h)
      }
    },
    dataFetched: function () {
      setTimeout(this.formatNote, 0)
    }
  }
}
</script>

<style lang="sass">
#notes-col
  text-align: left
  margin-left: calc(50% + 340px + 30px)
  position: absolute
  top: 0px
  width: 170px
  a
    color: #448aff
    &:hover
      // text-decoration: underline
  .side-note
    font-size: 13px
    line-height: 1.5
    color: #a4a4a4
    position: absolute
    transition: all .276s ease-in-out
    display: none
    .txt
      display: inline-block
      height: 40px
      overflow: hidden
      b
        color: #d65441
        font-size: 13px
    .more
      display: none
      float: right
      margin-top: -25.6px
      padding-left: 1px
      background-color: white
      position: relative
      width: 45px
      height: 25px
      a
        color: #a4a4a4
        margin-left: 5px
        &:hover
          color: #448aff
          text-decoration: none
@media (max-width: 1250px)
  #notes-col
    margin-left: calc(50vw + 290px) !important
    width: 14vw !important
@media (max-width: 1024px)
  #notes-col
    display: none
</style>

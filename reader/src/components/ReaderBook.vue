<template>
  <div id="reader">
    <left-info :book-data="bookData.book"></left-info>
    <!-- rooter-view is related to ReaderChapter.vue -->
    <router-view :book-title="bookData.book.title" :book-chapters="bookChapters.chapters"></router-view>
    <right-menu :book-summary="bookSummary.summary"></right-menu>
  </div>
</template>

<script>
// import des libs
import api from '../services/api.js'
import Vue from 'vue'
// import des composants nécessaires
import RightMenu from './RightMenu.vue'
import LeftInfo from './LeftInfo.vue'

export default {
  components: {
    RightMenu,
    LeftInfo
  },
  data () {
    return {
      bookData: {},
      bookSummary: {},
      bookChapters: {}
    }
  },
  created: function () {
    var self = this
    var bookTitle = self.$route.params.livre
    // get the book datas
    api.findBook(bookTitle, function (response) {
      // we update our data vars
      Vue.set(self.bookData, 'book', response.books[0])
      Vue.set(self.bookSummary, 'summary', response.books[0].summary)
      Vue.set(self.bookChapters, 'chapters', response.books[0].chapters)

      self.$broadcast('dataFetched')
    // if the book is not found
    }, function (response) {
      console.log(response)
      console.log(response.status + ' - ' + self.$route.params.livre + ' Book not found')
      // redirection to error component
      self.$route.router.go({ name: 'error', params: { code: response.status } })
    })
  }
}
</script>

<style lang="sass">
// animations globales
#header, .leftBar, .right-bar, #btns-mobile-notes-contents
  transition: all 0.276s ease-in-out

</style>

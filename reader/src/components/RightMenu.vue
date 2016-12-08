<template>
  <div id="right-menu">
    <div class="right-bar">
      <a v-on:click="openOrCloseChapterList">
        <i class="menu-icon fa fa-2x" v-bind:class="{ 'fa-times': isChapterOpened, 'fa-list-ul': !isChapterOpened }" aria-hidden="true"></i>
      </a>
      <a v-on:click="openOrCloseAnnotationList">
        <i class="menu-icon fa fa-2x" v-bind:class="{ 'fa-times': isAnnotationOpened, 'fa-pencil-square-o': !isAnnotationOpened }" aria-hidden="true"></i>
      </a>
      <a v-on:click="openOrCloseBookmarkList">
        <i class="menu-icon fa fa-2x" v-bind:class="{ 'fa-times': isBookmarkOpened, 'fa-bookmark-o': !isBookmarkOpened }" aria-hidden="true"></i>
      </a>
      <a v-on:click="openOrCloseSocial">
        <i class="menu-icon fa fa-2x" v-bind:class="{ 'fa-times': isSocialOpened, 'fa-link': !isSocialOpened }" aria-hidden="true"></i>
      </a>
    </div><!--
 --><div class="right-content" v-bind:class="{ 'opened': isChapterOpened }" class="chapter">
      <div class="chapter" v-for="chapter in bookSummary">
        <a v-link="{ name:'chapter', params: { chapitre:chapter.id }, activeClass: 'current'}">
          <span class="chapterNumber">Chapitre {{chapter.id}} : </span>{{chapter.title}}
        </a>
      </div>
      <!-- <div class="chapter completed">
        <a href="#">
          <span class="chapterNumber">Chapitre 1 : </span>coucou
        </a>
        <i class="fa fa-check" aria-hidden="true"></i>
      </div>
      <div class="chapter current">
        <a href="#">
          <span class="chapterNumber">Chapitre 1 : </span>coucou
        </a>
      </div> -->
    </div><div class="right-content" v-bind:class="{ 'opened': isAnnotationOpened }">
      <div class="header">
        <p>Notes d'utilisateur</p>
        <i class="fa fa-external-link" aria-hidden="true"></i>
      </div>
      <div class="note">
        <div class="main">
          <p>1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel voluptas, voluptate aperiam dicta repellat a natus distinctio modi atque reprehenderit tempore repudiandae corrupti esse perspiciatis cum quos molestias quae officiis!</p>
          <div class="infos">
            <span class="date">00:00 01/01/00</span>
            <span class="author">Par Jizous</span>
            <div class="iconContainer">
              <i class="fa fa-link" aria-hidden="true"></i>
              <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
              <i class="fa fa-trash-o" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <i class="fa fa-unlock-alt" aria-hidden="true"></i>

      </div>
    <div class="note">
        <div class="main">
          <p>1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel voluptas, voluptate aperiam dicta repellat a natus distinctio modi atque reprehenderit tempore repudiandae corrupti esse perspiciatis cum quos molestias quae officiis!</p>
          <div class="infos">
            <span class="date">00:00 01/01/00</span>
            <span class="author">Par Jizous</span>
            <div class="iconContainer">
              <i class="fa fa-link" aria-hidden="true"></i>
              <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
              <i class="fa fa-trash-o" aria-hidden="true"></i>
            </div>
          </div>

        </div>
        <i class="fa fa-unlock-alt" aria-hidden="true"></i>

      </div>
    <div class="note">
        <div class="main">
          <p>1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel voluptas, voluptate aperiam dicta repellat a natus distinctio modi atque reprehenderit tempore repudiandae corrupti esse perspiciatis cum quos molestias quae officiis!</p>
          <div class="infos">
            <span class="date">00:00 01/01/00</span>
            <span class="author">Par Jizous</span>
            <div class="iconContainer">
              <i class="fa fa-link" aria-hidden="true"></i>
              <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
              <i class="fa fa-trash-o" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <i class="fa fa-unlock-alt" aria-hidden="true"></i>

      </div>
    </div><div class="right-content" v-bind:class="{ 'opened': isBookmarkOpened }">
      <div class="bookmark add">
        <a href="#">
          <div>Ajouter un marque page</div>
          <span>Virus, parasite et ordinateur</span>
        </a>
        <i class="fa fa-bookmark-o" aria-hidden="true"></i>

      </div>
      <div class="bookmark">
        <a href="#">
          <div>Ajouter un marque page</div>
          <span>Virus, parasite et ordinateur</span>
        </a>
        <i class="fa fa-times" aria-hidden="true"></i>

      </div>
      <div class="bookmark">
        <a href="#">
          <div>Ajouter un marque page</div>
          <span>Virus, parasite et ordinateur</span>
        </a>
        <i class="fa fa-times" aria-hidden="true"></i>

      </div>
      <div class="bookmark">
        <a href="#">
          <div>Ajouter un marque page</div>
          <span>Virus, parasite et ordinateur</span>
        </a>
        <i class="fa fa-times" aria-hidden="true"></i>

      </div>
    </div><div class="right-content" v-bind:class="{ 'opened': isSocialOpened }">
      <div class="header">
        <p>Partage</p>
      </div>
      <div class="socialBox">
        <button class="facebook"><i class="fa fa-facebook" aria-hidden="true"></i> <span>Facebook</span></button>
        <button class="twitter"><i class="fa fa-twitter" aria-hidden="true"></i> <span>Twitter</span></button>
        <button class="google"><i class="fa fa-google" aria-hidden="true"></i> <span>Google</span></button>
        <button class="email"><i class="fa fa-envelope-o" aria-hidden="true"></i> <span>Email</span></button>
      </div>
      <div class="urlContainer">
        <p>Partagez l'url : </p>
        <div class="url">http://www.example.com</div>
        <button>Copier</button>
      </div>
      <div class="integrateContainer">
        <p>Intégrer : </p>
        <p class="small">Collez le code html suivant pour intégrer ce livre sur votre site.</p>
        <div class="btns">
          <button>Petit</button>
          <button>Moyen</button>
          <button>Grand</button>
        </div>
        <div class="code">
          <p>&lt;iframe src=&quot;http://books.openedition.org/editionsbnf/1547?format=embed&quot; style=&quot;padding:5px;border:2px solid #ddd;&quot; width=&quot;1024&quot; height=&quot;768&quot;&gt;&lt;/iframe&gt;</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  props: {
    bookSummary: Array
  },
  data () {
    return {
      isChapterOpened: false,
      isBookmarkOpened: false,
      isSocialOpened: false,
      isAnnotationOpened: false
    }
  },
  methods: {
    changeStyle: function () {
      if ((this.isChapterOpened || this.isBookmarkOpened || this.isSocialOpened || this.isAnnotationOpened) && $(window).width() < 1024) {
        $('#right-menu .right-bar, #right-menu .menu-icon').addClass('menu-clicked')
        $('#mask').fadeIn('fast')
        $('.arrow-right, .arrow-left, .comfort-btns, #btns-vertical-nav').css('z-index', '1')
      } else if (!this.isChapterOpened && !this.isBookmarkOpened && !this.isSocialOpened && !this.isAnnotationOpened && $(window).width() < 1024) {
        $('#right-menu .right-bar, #right-menu .menu-icon').removeClass('menu-clicked')
        $('#mask').fadeOut('fast')
        $('.arrow-right, .arrow-left, .comfort-btns, #btns-vertical-nav').css('z-index', '3')
      }
    },
    openOrCloseChapterList: function () {
      this.isChapterOpened = !this.isChapterOpened
      this.isBookmarkOpened = false
      this.isSocialOpened = false
      this.isAnnotationOpened = false
      this.changeStyle()
    },
    openOrCloseBookmarkList: function () {
      this.isBookmarkOpened = !this.isBookmarkOpened
      this.isChapterOpened = false
      this.isSocialOpened = false
      this.isAnnotationOpened = false
      this.changeStyle()
    },
    openOrCloseAnnotationList: function () {
      this.isAnnotationOpened = !this.isAnnotationOpened
      this.isChapterOpened = false
      this.isSocialOpened = false
      this.isBookmarkOpened = false
      this.changeStyle()
    },
    openOrCloseSocial: function () {
      this.isSocialOpened = !this.isSocialOpened
      this.isChapterOpened = false
      this.isBookmarkOpened = false
      this.isAnnotationOpened = false
      this.changeStyle()
    }
  }
}
</script>

<style scoped lang="sass">
#right-menu
  position: fixed
  z-index: 2
  display: block
  right: 0
  top: 0
  height: 100vh
  background-color: #4a4a4a
  padding: 0
  padding-top: 50px
  .menu-clicked
    background-color: #4a4a4a !important
    color: white !important
  .right-bar
    right: 0
    height: 100vh
    width: 62px
    display: inline-block
    vertical-align: top
    i
      margin-top: 25px
      text-align: left
      margin-left: 18px
      color: white
      display: block
      cursor: pointer
  .right-content.opened
    width: 300px
  .right-content
    background-color: #f0f0f0
    height: calc(100% + 50px)
    display: inline-block
    vertical-align: top
    transition: all 0.276s ease-in-out 0s
    overflow: hidden
    width: 0
    .chapter
      position: relative
      display: block
      margin: 16px 0px 16px 10px
      text-align: left
      &.current a
        color: #448aff
        span.chapterNumber
          color: #448aff
      &.completed i
        position: absolute
        color: green
        top: 4px
        right: 5px
      a
        font-family: 'Lato', sans-serif
        font-size: 14px
        text-decoration: none
        font-weight: bold
        .chapterNumber
          font-weight: bold
          color: #a4a4a4
    .bookmark
      position: relative
      margin: 28px 10px 16px 10px
      text-align: left
      display: block
      font-size: 12px
      span
        color: #a4a4a4
        font-weight: normal
      div
        font-weight: bold
      i
        position: absolute
        top: 12px
        right: 5px
      &.add
        margin-top: 15px
        text-decoration: none
        font-family: 'Lato', sans-serif
        a
          font-weight: bold
          color: #448aff
      &::after
        content: ""

        position: absolute
        bottom: -16px
        height: 2px
        background-color: #757575
        width: 100%
        left: 0
    .header
      margin: 16px 0px 16px 15px
      text-align: left
      position: relative
      p
        display: inline-block
        font-family: 'Lato', sans-serif
        font-size: 18px
        text-decoration: none
        font-weight: bold
        margin: 0
        &::after
          content: ""
          position: absolute
          bottom: 0
          height: 2px
          background-color: #e1e1e1
          width: 75%
          left: 0
      i
        position: absolute
        top: 7px
        right: 5px
    .note
      margin: 16px 0px 16px 0px
      padding: 0px 30px 0px 30px
      text-align: left
      position: relative
      font-family: Georgia
      i
        position: absolute
        top: -2px
        right: 5px
      .main
        p
          width: 100%
          color: #3b3b3b
          font-size: 12px
          margin-bottom: 0
        span
          font-size: 8px
          margin-right: 5px
        .iconContainer
          float: right
          i
            position: relative
            display: inline-block
            top: 0
            bottom: 0
            left: 0
            right: 0
    .socialBox
      margin: 16px 0px 16px 10px
      button
        position: relative
        width: 85px
        height: 30px
        margin-right: 10px
        margin-top: 5px
        border-radius: 20px
        color: white
        font-size: 12px
        font-family: 'Lato', sans-serif
        text-decoration: none
        border: none
        &.facebook
          background: #3b5998
        &.twitter
          background: #4099ff
        &.google
          background: #dd4b39
        &.email
          background: #39c4a2
          i
            left: 9px
        i
          position: absolute
          left: 10px
          top: 9px
        span
          position: absolute
          left: 25px
          top: 6px
    .urlContainer
      margin: 16px 0px 16px 10px
      text-align: left
      font-weight: bold
      font-size: 12px
      font-family: 'Lato', sans-serif
      .url
        width: 90%
        padding: 5px 10px
        border-radius: 20px
        border: solid black 1px
        margin-left: 50%
        transform: translateX(-50%)
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis
      button
        position: relative
        width: 85px
        height: 30px
        margin-left: 50%
        transform: translateX(-50%)
        margin-top: 15px
        border-radius: 20px
        color: white
        font-size: 12px
        font-family: 'Lato', sans-serif
        text-decoration: none
        border: none
    .integrateContainer
      margin: 16px 0px 16px 10px
      text-align: left
      font-weight: bold
      font-size: 12px
      font-family: 'Lato', sans-serif
      .small
        font-weight: normal
        font-size: 10px
      .btns
        display: flex
        flex-flow: initial wrap
        justify-content: space-between
        max-width: 250px
        margin-left: 50%
        transform: translateX(-50%)
      .btns button
        position: relative
        width: 58px
        height: 30px
        border-radius: 8px
        color: black
        font-size: 12px
        font-family: 'Lato', sans-serif
        text-decoration: none
        border: none
        &.active
          background-color: #448aff
          color: white
      .code
        margin-top: 15px
        background-color: #d8d8d8
        overflow: hidden
        padding: 0 10px
        border-radius: 10px
        font-size: 10px
        font-weight: normal
@media (max-width: 1024px)
  #right-menu
    background-color: transparent
    .right-bar
      padding-left: 15px
      padding-right: 10px
      width: auto
    .right-bar .menu-icon
      color: #4a4a4a
      margin-left: 0
      font-size: 24px
      transition: all 0.276s ease-in-out
    .opened
      width: 65vw !important
</style>

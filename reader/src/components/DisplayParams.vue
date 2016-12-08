<template>
  <div id="display-params">
    <div class="font-size-buttons">
      <span class="font-size-title">Taille de police</span>
      <button class="small-size" v-on:click="changeFontSize(16)">Aa</button>
      <button class="medium-size active-font" v-on:click="changeFontSize(20)">Aa</button>
      <button class="large-size" v-on:click="changeFontSize(24)">Aa</button>
    </div>
    <div class="font-family-selector">
      <span class="font-family-title">Type de police</span>
      <select class="font-family-select" name="font-family-select" v-model="selectedFont" v-on:change="changeFontFamily(selectedFont)">
        <option class="font-family-option" value="Georgia">Serif</option>
        <option class="font-family-option" value="Open Sans">Sans Serif</option>
      </select>
    </div>
    <div class="background-color-selector">
      <span class="background-color-title">Couleur de fond</span>
      <button class="white-color active-color" v-on:click="changeBackgroundColor('white')"></button>
      <button class="medium-color" v-on:click="changeBackgroundColor('medium')"></button>
      <button class="dark-color" v-on:click="changeBackgroundColor('dark')"></button>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  data () {
    return {
      selectedFont: 'georgia',
      fontSize: parseInt(this.getCookie('font-size')),
      fontFamily: this.getCookie('font-family'),
      backgroundColor: this.getCookie('background-color')
    }
  },
  ready: function () {
    this.changeFontSize(this.fontSize)
    this.changeFontFamily(this.fontFamily)
    this.changeBackgroundColor(this.backgroundColor)
  },
  methods: {
    changeFontSize: function (size) {
      var current = $('.active-font')

      current.removeClass('active-font')

      if (size === 16) {
        $('.small-size').addClass('active-font')
        document.cookie = 'font-size=' + size
      } else if (size === 20) {
        $('.medium-size').addClass('active-font')
        document.cookie = 'font-size=' + size
      } else if (size === 24) {
        $('.large-size').addClass('active-font')
        document.cookie = 'font-size=' + size
      }

      $('.text').css('font-size', size + 'px')
    },
    changeFontFamily: function (font) {
      $('.text').css('font-family', font)

      $('.font-family-option').removeAttr('selected')
      $('.font-family-select option[value="' + font + '"]').attr('selected', true)

      document.cookie = 'font-family=' + font
    },
    changeBackgroundColor: function (color) {
      var white = $('.white-color')
      var medium = $('.medium-color')
      var dark = $('.dark-color')
      var current = $('.active-color')

      current.removeClass('active-color')

      if (color === 'white') {
        white.addClass('active-color')

        $('.follow').css('background-color', '#FFFFFF')
        $('html').css('background-color', '#FFFFFF')
        $('#app').css('background-color', '#FFFFFF')
        $('#reader').css('background-color', '#FFFFFF')
        $('.book-title').css('color', '#000000')
        $('.text').css('color', '#424242')
        $('.more').css('background-color', '#FFFFFF')

        document.cookie = 'background-color=' + color
      } else if (color === 'medium') {
        medium.addClass('active-color')

        $('.follow').css('background-color', '#F6EFDD')
        $('html').css('background-color', '#F6EFDD')
        $('#app').css('background-color', '#F6EFDD')
        $('#reader').css('background-color', '#F6EFDD')
        $('.book-title').css('color', '#000000')
        $('.text').css('color', '#424242')
        $('.more').css('background-color', '#F6EFDD')

        document.cookie = 'background-color=' + color
      } else if (color === 'dark') {
        dark.addClass('active-color')

        $('.follow').css('background-color', '#222222')
        $('.book-title').css('color', '#A0A0A0')
        $('html').css('background-color', '#222222')
        $('#app').css('background-color', '#222222')
        $('#reader').css('background-color', '#222222')
        $('.text').css('color', '#A0A0A0')
        $('.more').css('background-color', '#222222')

        document.cookie = 'background-color=' + color
      }
    },
    getCookie: function (name) {
      var value = '; ' + document.cookie
      var parts = value.split('; ' + name + '=')
      if (parts.length === 2) return parts.pop().split(';').shift()
    }
  }
}
</script>

<style lang="sass">
#display-params
  display: none
  position: absolute
  right: 10px
  top: 20px
  margin-top: 15px
  padding: 15px
  padding-bottom: 15px
  width: 200px
  height: 255px
  background-color: #E5E5E5
  border-radius: 8px
  z-index: 10
  text-align: left
  font-family: 'Lato', sans-serif
  font-size: 14px
  transition: all 0.276s ease
  .font-size-buttons
    margin-bottom: 15px
    .font-size-title
      display: block
      margin-bottom: 5px
    button
      border: none
      border-radius: 4px
      width: 40px
      height: 40px
      vertical-align: middle
      &.active-font
        color: #448aff
        border: 1px solid #448aff
    .small-size
      font-size: 16px
    .medium-size
      font-size: 20px
    .large-size
      font-size: 24px
  .font-family-selector
    margin-bottom: 15px
    .font-family-title
      display: block
      margin-bottom: 5px
  .background-color-selector
    .background-color-title
      display: block
      margin-bottom: 5px
    button
      height: 40px
      width: 40px
      border-radius: 50%
      border: none
      &.active-color
        border: 1px solid #448aff
      &.white-color
        background-color: #FFFFFF
      &.medium-color
        background-color: #F6EFDD
      &.dark-color
        background-color: #222222

@media (max-width: 768px)
  #display-params
    position: fixed
    right: 50px
    margin-top: 70%
</style>

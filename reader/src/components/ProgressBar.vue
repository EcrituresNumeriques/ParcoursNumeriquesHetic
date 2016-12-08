<template>
  <progress value="0">
  </progress>
</template>

<script>
import $ from 'jquery'

export default {
  ready: function () {
    setTimeout(function () {
      var winHeight = $(window).height()
      var docHeight = $(document).height()
      var max = docHeight - winHeight

      $('progress').attr('max', max)

      var value = $(window).scrollTop()
      $('progress').attr('value', value)

      $(document).on('scroll', function () {
        value = $(window).scrollTop()
        $('progress').attr('value', value)
      })

      $(window).on('resize', function () {
        winHeight = $(window).height()
        docHeight = $(document).height()
        var max = docHeight - winHeight

        $('progress').attr('max', max)
      })
    }, 100)
  }
}
</script>

<style lang="sass" scoped>
progress
  z-index: 1000
  position: fixed
  left: 0
  top: 50px
  width: 100%
  height: 2px
  background-color: transparent
  -webkit-appearance: none
  -moz-appearance: none
  appearance: none
  border: none
  transition: all 0.276s ease-in-out

progress::-webkit-progress-bar
  background-color: transparent

progress::-webkit-progress-value
  background-color: #448aff

progress:-moz-progress-bar
  background-color: #448aff
</style>

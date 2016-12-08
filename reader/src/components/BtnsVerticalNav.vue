<template>
  <div id="btns-vertical-nav">
    <div class="contents buttons" v-on:click="scrollBottomReader">Contenus Add. <i class="fa fa-angle-down fa-2x" aria-hidden="true"></i></div>
    <div class="totop buttons" v-on:click="scrollTopReader"><i class="fa fa-angle-up fa-2x" aria-hidden="true"></i></div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  data () {
    return {}
  },
  methods: {
    scrollBottomReader: function () {
      $('html, body').animate({ scrollTop: $(document).height() }, 1000)
    },
    scrollTopReader: function () {
      $('html, body').animate({ scrollTop: 0 }, 1000)
    }
  }
}
</script>

<style lang="sass">
#btns-vertical-nav
  position: fixed
  bottom: 50px
  left: calc(50% + 340px + 30px)
  width: 170px
  padding-right: 3px
  .buttons
    display: inline-block
    font-weight: normal
    font-size: 13px
    border-radius: 4px
    padding: 10px
    padding-top: 2px
    padding-bottom: 10px
    text-align: left
    margin: 0
    cursor: pointer
    &:hover
      color: #448aff
    &:first-child
      margin-right: 2px
    i
      transform: translateY(10%)
    &.contents
      width: 125px
    &.totop
      width: 36px
  .contents
    padding-right: 0
    i
      padding-right: 8px
      padding-left: 3px
    // transform: translateX(10%)
@media (max-width: 1250px)
  #btns-vertical-nav
    left: calc(50vw + 290px)
    text-align: left
    padding: 0
@media (max-width: 1090px)
  #btns-vertical-nav
    bottom: 6px
    .buttons
      display: block
      clear: both
      &.totop
        float: right
        margin-right: 45px
        margin-top: 6px
@media (max-width: 1024px)
  #btns-vertical-nav
    position: fixed
    z-index: 3
    bottom: calc(12.5% - 50px)
    right: 10px
    margin: 0
    padding: 0
    left: 0
    text-align: center 
    width: auto
    .contents.buttons
      display: none
    .totop.buttons
      height: 30px
      width: 30px
      text-align: center
      margin: 0 !important
      padding: 0 !important
      i
        margin-top: -2px

</style>

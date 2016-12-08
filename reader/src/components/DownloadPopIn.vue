<template>
  <div id="dl-pop-in">
    <div class="title">Télécharger</div>
    <div class="close" @click="hidePopIn"></div>
    <!-- <i class="fa fa-times" aria-hidden="true"> -->
    <div class="row">
        <div class="pdf left">
            <div class="icon">
        	    <i class="fa fa-file-pdf-o fa-5x" aria-hidden="true"></i>
        	</div>
	        <div class="txt">
		        VERSION PDF
		        <br>ISBN : 978-2-7606-3203-5
	        </div>
        </div>
        <div class="epub right">
            <div class="icon">
            	<i class="fa fa-file-o fa-5x" aria-hidden="true"></i>
            </div>
		        <div class="txt">
		        VERSION EPUB
		        <br>ISBN : 978-2-7606-3204-2
	        </div>
        </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  methods: {
    hidePopIn: function (e) {
      $('#dl-pop-in').fadeOut('fast')
      $('#mask').fadeOut('fast')
      $('#mask').css('z-index', 3)
    }
  }
}
</script>

<style lang="sass">
#dl-pop-in
  position: fixed
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)
  width: 360px
  height: 220px
  background-color: #f4f4f4
  z-index: 5
  padding: 15px
  display: none
  .title
    position: absolute
    left: 20px
    font-weight: bold
    font-size: 1.1em
  .close
    position: absolute
    right: 20px
    width: 20px
    height: 20px
    cursor: pointer
    opacity: 0.4
    transition: opacity 0.276s ease-in-out
    &:before, &:after
      position: absolute
      content: ' '
      height: 20px
      width: 2px
      background-color: black
    &:before
      transform: rotate(45deg)
    &:after
      transform: rotate(-45deg)
    &:hover
      opacity: 1
  .row
    width: 100%
    position: absolute
    top: calc(50% + 15px)
    transform: translateY(-50%)
    padding-left: 15px
    padding-right: 15px
    font-size: 0.8em
    font-weight: bold
    .left
      float: left
      width: 50%
    .txt
      margin-top: 20px
    .icon
      color: black
      cursor: pointer
      transition: color 0.276s ease-in-out
      &:hover
        color: #448aff
</style>
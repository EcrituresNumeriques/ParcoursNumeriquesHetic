<template>
  <div id="add-content">
    <h2>Contenus additionnels</h2>
    <ul>
      <li class="contents" v-for="content in contents">
         <div class="icons">
           <i v-if="content.type == 'video'" class="fa fa-youtube-play" aria-hidden="true"></i>
           <i v-if="content.type == 'link'" class="fa fa-file-o" aria-hidden="true"></i>
         </div>
         <div class="txt">
           <a class="link" :href="content.link" target="_blank">{{ content.content }}</a>
           <span class="from">{{ content.from }}</span>
         </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    contents: Array
  },
  data () {
    return {}
  }
}
</script>

<style lang="sass">
#add-content
  font-family: 'Lato', sans-serif
  color: #424242
  font-size: .9em
  margin-top: 50px
  h2
    border-bottom: 2pt solid #d8d8d8
    font-size: 1.2em
  ul
    margin: 0
    padding: 0
    li
      list-style-type: none
      position: relative
      margin-bottom: 20px
      .icons
        position: absolute
        float: left
        top: 50%
        transform: translateY(-50%)
        color: #424242
      .txt
        margin-left: 35px
        a
          color: #448aff
@media (max-width: 1024px)
  #add-content
    display: none

</style>
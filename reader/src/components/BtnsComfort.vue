<template>
  <div class="comfort-btns">
    <span class="style buttons">Aa</span>
    <span class="zen buttons">Zen</span>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="sass">
@media (max-width: 1024px)
  .comfort-btns
    position: fixed
    right: 10px
    bottom: 12.5%
    z-index: 3
    text-align: center
    .buttons
      display: block
      margin: 0
      padding: 0
      height: 30px
      width: 30px
      line-height: 30px
      &:first-child
        margin-bottom: 20px
</style>

<template>
  <div id="error">
    <h1>Ce livre n'existe pas</h1>
    <h2>Essayez celui-ci : </h2>
    <a v-link="{ name: 'book', params: {livre: 'surveiller-et-sourire'} }"> Surveiller et sourire - sophie Limare</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Ce livre n\'existe pas !'
    }
  }
}
</script>

<style></style>

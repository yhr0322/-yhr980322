<template>
  <div class="hello">
    <p>home</p>
    <p>{{list}}</p>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    list(){
      return this.$store.state.list
    }
  },
}
</script>
<style scoped lang="scss">

</style>

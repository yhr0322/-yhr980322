<template>
  <div> 
  <div class="fen_header">
  <div class="search">
   <i class="el-icon-search"></i>
    <input type="text" placeholder="搜索商品" v-model="value.input_value">
   </div>
  </div>
   
  </div>
</template>
<script>
export default{
  name: 'aaaa',
  computed: {
    value(){
      return this.$store.state.value
    }
  },
} 
</script>
<style>

</style>

<template>
  <div> 
  <div class="shop_list">
   <p class="p1">人气推荐 > </p>
   <ul>
   <li v-for="(item,index) in shopa_list">
   <img :src="item.pic" alt="">
   <p>￥{{item.minPrice}}</p>
   </li>
   </ul>
   </div>
  </div>
</template>
<script>
export default {
  name: 'lista',
  computed: {
    shopa_list(){
      return this.$store.state.shopa_list
    },
  },
} 
</script>
<style>

</style>

<template>
  <div> 
  
   <div class="shopp_list">
   <div class="shopp_top">
   <router-link to="/" tag="p"><i class="el-icon-arrow-left"></i></router-link>
   <router-link to="/shopp"><p class="p1">人气推荐</p></router-link>
    <p></p>
   </div>
   
   <ul>
   <li v-for="(item,index) in shop_list">
   <img :src="item.pic" alt="">
   <p>￥{{item.minPrice}}</p>
   </li>
   </ul>
   </div>
   
  </div>
</template>
<script>

export default {
  name: 'shopp',
  
  computed: {
    shop_list(){
      return this.$store.state.shop_list
    },
  },
} 
</script>
<style>

</style>

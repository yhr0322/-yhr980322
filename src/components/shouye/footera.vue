<template>
  <div> 
  <ul class="positiona">
     <router-link to="/" tag="li" exact>
     <i class="el-icon-house"></i>
     首页
     </router-link>
     <router-link to="/Fen" tag="li" >
     <i class="el-icon-copy-document"></i>
     分类
     </router-link>
     <router-link to="/car" tag="li" >
     <i class="el-icon-shopping-cart-full"></i>
     购物车
     </router-link>
     <router-link to="/user" tag="li" >
     <i class="el-icon-user"></i>
     用户
     </router-link>
      <p class="car_all_num">{{car_all_num}}</p>
     </ul>
    
  </div>
</template>
<script>
export default {
  name: 'footera',
  computed: {
    car_all_num(){
      return this.$store.getters.car_all_num
    }
  },
} 
</script>
<style>

</style>

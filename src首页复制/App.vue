<template>
  <div id="app"> 
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
     </ul>
     <hr>
     <transition name="fade">
    <router-view/>
      </transition>
  </div>
</template>
<script>
export default {
  name: 'App'
} 
</script>
<style>

</style>

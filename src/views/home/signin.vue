<template>
  <div> 
   <div class="signin">
  <router-link to="/"><i class="el-icon-arrow-left"></i></router-link>
  <p class="str">您的可用积分为</p>
  <p class="num">999</p>
   </div>
   <p class="signin_null"></p>
   <p class="signin_signin">签到</p>
   <div class="shopping">
   <router-link to="/"><img src="@/assets/img/signina.png" alt=""></router-link>
   </div>
   <div class="signin_img">
   <router-link to="/exchange"><img src="@/assets/img/signinb.png" alt=""></router-link>
   </div>
  </div>
</template>
<script>
export default {
  name: 'signin'
} 
</script>
<style>

</style>

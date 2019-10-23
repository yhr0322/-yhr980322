<template>
  <div> 
    <div class="exchange">
    <i class="el-icon-arrow-left" @click="goback"></i>
    <img src="@/assets/img/exchange_img.png" alt="" class="exchange_img">
    <div class="input">
    <input type="text" placeholder="请输入礼券码"><button>兑换</button>
    </div>
    </div>
    <div class="exchange_foot_img">
    <img src="@/assets/img/exchangea.png" alt="">
    <img src="@/assets/img/exchangeb.png" alt="">
    </div>
    
  
  </div>
</template>
<script>
export default {
  name: 'exchange',
  methods: {
    goback(){
       this.$router.go(-1)
    }
       
  },
} 
</script>
<style>

</style>

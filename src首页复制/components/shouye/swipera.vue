<template>
  <div> 
    
   <div class="swiper">
  <van-swipe :autoplay="3000" indicator-color="white">
  <van-swipe-item v-for="(item,index) in list" :key="index">
  <img :src="item.picUrl" alt="">
  </van-swipe-item>
 </van-swipe>
  </div>
 
  </div>
</template>
<script>
export default {
  name: 'swipera',
  computed: {
    list(){
      return this.$store.state.list
    },
     
  },
} 
</script>
<style>

</style>

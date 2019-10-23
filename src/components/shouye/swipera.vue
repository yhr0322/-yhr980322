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
import Product from '../../services/services'
const _product = new Product()
export default {
  name: 'swipera',
  data() {
    return {
      list:[]
    }
  },
  computed: {
  },
  created () {
    // pending - 等待
    _product.list().then(res => {
      this.list = res.data.data
      console.log( this.list)
    })
  }
} 
</script>
<style>

</style>

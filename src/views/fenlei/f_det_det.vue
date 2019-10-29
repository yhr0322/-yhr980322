<template>
  <div> 
   <div class="fdd_top"> 
   <div class="swiper">
  <van-swipe :autoplay="3000" indicator-color="white">
  <van-swipe-item v-for="(item,index) in f_det_det.pics" :key="index">
  <img :src="item.pic" alt="">
  </van-swipe-item>
 </van-swipe>
  </div>
   <i class="el-icon-arrow-left"  @click="gobacka"></i>

   <h4>{{f_det_det.basicInfo.name}}</h4>
   <p class="fdd_name">{{f_det_det.basicInfo.characteristic}}</p>
   <div  class="fdd_price">
   <p>
   <span class="fdd_minprice">底价：￥{{f_det_det.basicInfo.minPrice}}</span>&nbsp;&nbsp;&nbsp;
   <span class="fdd_originalPrice">原价：￥{{f_det_det.basicInfo.originalPrice}}</span>
   </p>
   <p>库存：{{f_det_det.basicInfo.stores}}</p>
   </div>
   </div>
<div id="fdd_content" v-html="f_det_det.content"></div>
   <Footercar></Footercar>
  </div>
</template>
<script>
import Footercar from "../../components/shouye/footercar.vue"
import Product from '../../services/services'
const _product = new Product()

export default {
  name: 'f_det_det',
  components:{
Footercar
  },
  data() {
    return {
      f_det_det:[]
    }
  },
   methods: {
    gobacka(){
       this.$router.go(-1)
    }
  },
  created () {
    // pending - 等待
    let id=this.$route.params.id
    _product.f_det_det(id).then(res => {
      this.f_det_det = res.data.data
     
      this.$store.state.f_det_det_str=this.f_det_det
       console.log(this.$store.state.f_det_det_str)
     })
     
  }
} 
</script>
<style>

</style>

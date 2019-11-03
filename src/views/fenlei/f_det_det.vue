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
   <div class="fdd_bottom">
   <p @click="change_true">商品详情</p>
   <p @click="change_false">商品评价</p>
   </div>
<div id="fdd_content" v-html="f_det_det.content" v-show="show"></div>
<div class="fdd_contenta" v-show="!show">
<ul>
<li v-for="(item,index) in change_falsea">
   <img src="@/assets/SHIWU.png" alt="">
   <div class="fdd_diva">
   <p>匿名用户 <span>{{item.goods.goodReputationStr}}</span></p>  
   <h4>{{item.goods.goodReputationRemark}}</h4>
   <h5>{{item.goods.dateReputation}} &nbsp;&nbsp;&nbsp;选择规格：{{item.goods.goodsName}}</h5>
   </div>
</li>
</ul>
</div>
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
      f_det_det:[],
      show:true,
      change_falsea:[]
    }
  },
   methods: {
    gobacka(){
       this.$router.go(-1)
    },
    change_true(){
      this.show=true
    },
    change_false(){
     this.show=false
  let id=this.$route.params.id
    _product.change_falsea(id).then(res => {
      this.change_falsea = res.data.data
       console.log(res)
       console.log(  this.change_falsea )
     })

       
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

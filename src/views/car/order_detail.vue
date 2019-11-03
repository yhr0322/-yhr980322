<template>
  <div> 
   <div class="order_det_alla">
   <div class="o_det_top">
    <router-link to="/order_ok" tag="p"><i class="el-icon-arrow-left"></i></router-link>
    <router-link to="/order_detail"><p class="p1">订单详情</p></router-link>
    <p></p>
   </div>
   <div class="order_det_content" >
   <p class="pa">订单号：{{order_deta.orderInfo.orderNumber}}</p>
   <ul>
   <li v-for="(item,index) in order_deta.goods">
   <img :src="item.pic" alt="">
   <div class="det_cont_left">
   <h4>{{item.goodsName}}</h4>
    <p>{{item.property}}</p>
    <p>数量：{{item.number}}
    
     
     <span v-if="order_deta.orderInfo.status==3" @click="order_r_p(item,index)">去评价</span> 
    
      <span v-if="order_deta.orderInfo.status==-1">订单关闭</span> 
     </p>
   </div>

   </li>
   
   </ul>
   </div>


   </div>
    
  </div>
</template>
<script>
import Product from '../../services/services'
const _product = new Product()
export default {
  name: 'order_detail',
  created() {
    let indexa=this.$store.state.num_num
    let token=this.$store.state.token
      _product.order_deta(token,indexa).then(res => {

          this.$store.state.order_deta=res.data.data

     console.log(this.$store.state.order_deta)
    })
  },
  computed: {
    order_deta(){
      return this.$store.state.order_deta
    }
  },
  methods: {
    order_r_p(item,index){
     
      
      this.$router.push("/order_pj")
    }
  },
} 
</script>
<style>

</style>

<template>
  <div> 
    <div class="order_yes_all">
      <div class="order_yes_top">
       <router-link to="/order" tag="p"><i class="el-icon-arrow-left"></i></router-link>
       <router-link to="/order"><p class="p1">确认订单</p></router-link>
       <p></p>
      </div>
<div class="order_c_top">
<van-icon name="gold-coin-o" />
<div>
<h4>商品总额：￥{{order_allprice}}</h4>
<p>订单号：{{order_num}}</p>
</div>
</div>
<div class="order_c_top">
<van-icon name="location-o" style="color:blue;" />
<div>
<h4>{{address_def.address_def.linkMan}} {{address_def.address_def.mobile}}</h4>
<p>{{address_def.address_def.address}}</p>
</div>
</div>
<button @click="al_pr">微信支付 ￥{{order_allprice}}</button>

    
    </div>
     
  </div>
</template>
<script>
import Product from '../../services/services'
const _product = new Product()
export default {
  name: 'order_yes',
  data() {
    return {
      
    }
  },
  created() {

  },
  computed: {
    order_allprice(){
      return this.$store.state.order_allprice
    },
    order_num(){
      return this.$store.state.order_num
    },
     address_def(){
      return this.$store.state.address_defa
    }
  },
  methods: {
    al_pr(){
      alert("已成功支付！")
    }
  },
  
} 
</script>
<style>

</style>

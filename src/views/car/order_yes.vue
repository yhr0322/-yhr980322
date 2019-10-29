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
<h4>商品总额：￥{{car_all_price}}</h4>
<p>订单号：{{order_num}}</p>
</div>
</div>
<div class="order_c_top">
<van-icon name="location-o" style="color:blue;" />
<div v-for="(item,index) in address_def.address_def">
<h4>{{item.linkMan}} {{item.mobile}}</h4>
<p>{{item.address}}</p>
</div>
</div>
<button @click="al_pr">微信支付 ￥{{car_all_price}}</button>

    
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
    car_all_price(){
      return this.$store.getters.car_all_price
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

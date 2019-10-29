<template>
  <div> 
  <div class="order_all">
  <div class="order_top">
   <router-link to="/car" tag="p"><i class="el-icon-arrow-left"></i></router-link>
   <router-link to="/order"><p class="p1">确认订单</p></router-link>
    <p></p>
   </div>
   <div class="order_address">
   <van-icon name="location-o" />
   <div class="address_address">
   <p>{{address_def.address_def.linkMan}} {{address_def.address_def.mobile}}</p>
   <p>{{address_def.address_def.address}}</p>
   </div>
   <van-icon name="arrow" />
   </div>

   <div class="shop_list">
   <p>商品列表</p>
   <ul>
   <li v-for="(item,index) in order_listaaaa">
   <img :src="item.f_det_det_str.basicInfo.pic" alt="">
   <div class="shop_list_r">
   <h4> 
   <span>{{item.f_det_det_str.basicInfo.name}}</span>
   <span>￥{{item.f_det_det_str.basicInfo.minPrice}}</span>
    </h4>
   <p> <span>{{item.size}} {{item.color}}</span><span>x {{item.car_num}}</span></p>
   </div>
   </li>
   </ul>
   </div>
   <div class="address_add">
   <div class="order_topa">
   <p>配送方式</p>
   <p>普通快递</p>
   </div>
   <div class="order_bottom">
   <span>备注</span>
   <input type="text" placeholder="如需备注请输入">
  </div>
   </div>
   <div class="order_price">
   <p>商品金额</p>
   <p>￥{{car_all_price}}</p>
   </div>
   <div class="order_order">
   <span>合计：{{car_all_price}}</span>
   <router-link to="/order_yes"><button @click="create_order">提交订单</button></router-link>
   </div>

  </div>
   
  </div>
</template>

<script>

import Product from '../../services/services'
const _product = new Product()
export default {
  name: 'order',
  created() {
    let token=this.$store.state.token
     _product.order_aaa(token).then(res => {
         this.address_def.address_def=res.data.data
     console.log(res.data.data)
    })
  },
  data() {
    return {
     
    }
  },
  methods: {
    create_order(){
let token=this.$store.state.token
    let id=JSON.stringify(this.$store.state.car_listaaa)
       _product.list_order(token,id).then(res => {
   this.$store.state.order_num = res.data.data.orderNumber
     console.log(res)
    })
    }
  },
  computed: {
    order_listaaaa(){
      return this.$store.state.order_listaaaa
    },
    car_all_price(){
      return this.$store.getters.car_all_price
    },
    address_def(){
      return this.$store.state.address_defa
    }
  },  
  
} 
</script>
<style>

</style>

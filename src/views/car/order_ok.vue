<template>
  <div> 
   <div class="my_orderall">
   <div class="my_ordertop">
    <router-link to="/user" tag="p"><i class="el-icon-arrow-left"></i></router-link>
       <router-link to="/user"><p class="p1">我的订单</p></router-link>
       <p></p>
   </div>
    <div class="my_list">
    <ul v-for="(item,index) in order_listnum">
    <router-link to="/order_detail"><p class="my_p" @click="num_num(index)">查看详情</p></router-link>
    <li v-for="(itema,indexa) in item">
    <img :src="itema.pic" alt="">
    <div class="my_l_div">
    <h4>{{itema.goodsName}}</h4>
    <p>{{itema.property}}</p>
    <p>数量：{{itema.number}}</p>
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
  name: 'order_ok',
  data() {
    return {
    }
  },
  computed: {
    order_listnum(){
      return this.$store.state.order_listnum
    }
  },
  created() {
    let token=this.$store.state.token
     _product.list_order_list(token).then(res => {
       this.$store.state.order_listnum=res.data.data.goodsMap
       this.$store.state.order_listnum_a=Object.keys(res.data.data.goodsMap)
       this.$store.state.order_state=res.data.data.orderListnj
     console.log( this.$store.state.order_listnum)
    })
  },
  methods: {
    num_num(index){
        this.$store.state.num_num=index
    }
  },
  
} 
</script>
<style>

</style>

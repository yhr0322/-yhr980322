<template>
  <div> 
  <div class="opj_all">
  <div class="opj_top">
   <router-link to="/order_detail" tag="p"><i class="el-icon-arrow-left"></i></router-link>
   <router-link to="/order_pj"><p class="p1">发布评论</p></router-link>
    <p style="color:orange" @click="opj_pj">发布</p>
  
  </div>

  <div class="opj_content" v-for="(item,index) in order_deta.goods">
  <img :src="item.pic" alt="">
  <div class="opjc_right">
  <h4>{{item.goodsName}}</h4>
 <p>{{item.property}}</p>
  </div>
  </div>
<div class="opj_start">
<span>整体评价</span> <van-rate v-model="value_start" :count="3" />
</div>
<div class="div">
<textarea placeholder="宝贝满足你得期待吗？说说你得使用心得，分享给想买得他们吧！！！" v-model="text_value"></textarea> 
</div>
  </div>
  </div>
</template>
<script>
import Product from '../../services/services'
const _product = new Product()
export default{
  name: 'order_pj',
  data() {
    return {
      value_start:'',
      text_value:''
    }
  },
  computed: {
    order_deta(){
      return this.$store.state.order_deta
    }
  },
  created() {
   console.log(this.$store.state.order_deta)
  },
  methods: {
    opj_pj(){
      let token=this.$store.state.token
       let arr=[]
       let obj={
         id:this.order_deta.goods[0].id,
         reputation:this.value_start,
         remark:this.text_value,
       }
       arr.push(obj)

       let bbbb={
           token:this.$store.state.token,
           orderId:this.order_deta.orderInfo.id,
           reputations:arr,
       }
       let cccc={
         token:this.$store.state.token,
         dddd:JSON.stringify(bbbb)
       }
 _product.lis(cccc).then(res => {
    
     console.log(res)
    })

    }
  },
} 
</script>
<style>

</style>

<template>
  <div> 
     <div class="user_all">
     <router-link to="/login">
     <div class="user_top">
     <i class="el-icon-user"></i>
     <div class="user_left">
     <p>{{login_phonea}}</p>
     <span>积分：0</span>
     </div>
     </div>
     </router-link>
     <div class="user_msg">
      <van-icon name="volume-o" />
      <span>新上线更稳定的付费快递查询接口</span>
     </div>
     <div class="user_order" > 
     <p class="u_my_order">
     <van-icon name="records" />
     <span>我的订单</span>
     </p>
     <router-link to="/order_ok" tag="i"><van-icon name="arrow" /></router-link>
     </div>
    <div class="user_nav">
    <ul>
    <li><van-icon name="pending-payment" @click="jump_no('待付款')" />待付款</li>
    <li><van-icon name="send-gift-o" />待发货</li>
    <li><van-icon name="logistics" />待收货</li>
    <li><van-icon name="comment-o" />待评价</li>
    </ul>
    </div> 
     <div class="u_s_nav">
     <ul>
    <li><van-icon name="after-sale" />我的余额</li>
    <li><van-icon name="edit" />我的砍价</li>
    <li><van-icon name="coupon-o" />我的礼券</li>
    <li><van-icon name="star-o" />我的收藏</li>
    <router-link tag="li" to="/addressa"><van-icon name="location-o" />联系地址</router-link>
    <li><van-icon name="service-o" />联系客服</li>
    </ul>
     
     </div>
     </div>
     <footera></footera>
  </div>
</template>
<script>
import footera from "../../components/shouye/footera.vue"
export default {
  name: 'user',
components:{
    footera
  },

  data() {
    return {
      login_phonea:'点我登录'
    }
  },
  created() {
    console.log(this.$store.state.login_phone)
    if(this.$store.state.login_phone==''){
      this.login_phonea="点我登录"
    }else{
this.login_phonea=this.$store.state.login_phone
    }
  },
 methods: {
   jump_no(str){
    //  this.$store.commit("jump_no",str)
     this.$store.state.order_statea=str
      if (this.$store.state.token == '') {
        alert("请先登录！")
       this.$router.push('/login')
      } else {
          this.$router.push("/incomplete")
      }
   }
 },
} 
</script>
<style>

</style>

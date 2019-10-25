<template>
  <div> 
  <div class="footer_car">
  <van-goods-action v-show="change_show">
  <van-goods-action-icon icon="chat-o" text="客服" />
  <van-goods-action-icon icon="cart-o" text="购物车" info="5" />
  <van-goods-action-icon icon="shop-o" text="店铺" info="12" />
  <van-goods-action-button type="warning" text="加入购物车" @click="change_showa"/>
  <van-goods-action-button type="danger" text="立即购买"   @click="change_showb"/>
</van-goods-action>

<div class="footer_c_det" v-show="!change_show">
<div class="det_top">
<img :src="f_det_det_str.basicInfo.pic" alt="">
<div class="det_t_left">
<p>{{f_det_det_str.basicInfo.name}}</p>
<span>￥{{f_det_det_str.basicInfo.minPrice}}</span>
</div>

</div>
<div class="det_center" v-for="(item,index) in f_det_det_str.properties">
<p>{{item.name}}</p>

<div class="det_but">
<ul>
<li v-for="(itema,indexa) in item.childsCurGoods">{{itema.name}}</li>
</ul>
</div>
</div>

<div class="det_foot"> 
<ul>
<li>购买数量</li>
<li>
<button @click="foot_jian">-</button><span>{{car_num}}</span><button @click="foot_add">+</button>
</li>
</ul>

</div>
<div class="footer_but">

<button v-show="show_but">加入购物车</button>
<button v-show="!show_but">立即购买</button>
</div>
<van-icon name="close" @click="change_showc" />
</div>

  </div>
  </div>
</template>
<script>
export default{
  name: 'footer_car',
  data() {
    return {
      change_show:true,
      show_but:true
    }
  },
   computed: {
    f_det_det_str(){
      return this.$store.state.f_det_det_str
    },
    car_num(){
      return this.$store.state.car_num
    }
  }, 
  methods: {
    //改变购物车弹出框的显示隐藏
    change_showa(){
      this.change_show=false
       this.show_but=true
    },
    //改变购物车弹出框的显示隐藏
     change_showb(){
      this.change_show=false
      this.show_but=false
    },
    //关闭购物车弹出框
  change_showc(){
    this.change_show=true
  },
  //购物车弹出框内数量的增加
  foot_add(){
    this.$store.commit("foot_add")
  },
  //购物车弹出框内数量的减少
  foot_jian(){
    this.$store.commit("foot_jian")
  }
   
  },
} 
</script>
<style>

</style>

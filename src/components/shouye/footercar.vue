<template>
  <div> 
  <div class="footer_car">
  <van-goods-action v-show="change_show">
  <van-goods-action-icon icon="chat-o" text="客服" />
   <router-link to="/car"><van-goods-action-icon icon="cart-o" text="购物车" /></router-link>
  <van-goods-action-icon icon="shop-o" text="店铺" />
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
<div class="det_center" >
<p>{{f_det_det_str.properties[0].name}}</p>
<div class="det_but">
<ul>
<li v-bind:class="{'class_color':showcolor===indexa}" v-for="(itema,indexa) in f_det_det_str.properties[0].childsCurGoods" @click="add_size(itema,indexa)">{{itema.name}}</li>
</ul>
</div>
</div>
<div class="det_center" v-if="f_det_det_str.properties[1]">
<p>{{f_det_det_str.properties[1].name}}</p>
<div class="det_but">
<ul>
<li :class="{'class_colora':showcolora===indexa}" v-for="(itema,indexa) in f_det_det_str.properties[1].childsCurGoods" @click="add_color(itema,indexa)" >{{itema.name}}</li>
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
  <el-button :plain="true" v-show="show_but" @click="add_car(f_det_det_str)">加入购物车</el-button>
<button v-show="!show_but" @click="add_order(f_det_det_str)">立即购买</button>
</div>
<van-icon name="close" @click="change_showc" />
</div>

  </div>
  </div>
</template>
<script>
import Product from '../../services/services'
const _product = new Product()
export default{
  name: 'footer_car',
  data() {
    return {
      change_show:true,
      show_but:true,
      id:'',
      showcolor:'',
       showcolora:''
    }
  },
   computed: {
    f_det_det_str(){
      return this.$store.state.f_det_det_str
    },
    car_num(){
      return this.$store.state.car_num
    },
     car_all_num(){
      return this.$store.getters.car_all_num
    },
  }, 
  methods: {
    //立即下单做添加数据
    add_order(f_det_det_str){
   this.$store.commit("add_order",f_det_det_str)
   
         if (this.$store.state.token != '') {
           this.$router.push('/order')
         } else {
           this.$router.push('/login')
           alert("请先登录！！！")
         }

    },

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
  },
  //点击商品尺寸进行赋值
  add_size(item,indexa){
     this.showcolor=indexa
     console.log(this.showcolor)
     this.$store.state.size_id=item.id
     this.$store.state.size=item.name
      _product.list().then(res => {
      this.list = res.data.data
    })
   let obj={
     goodsId:this.f_det_det_str.basicInfo.id,
     propertyChildIds:item.id,
   }
   this.id=obj.propertyChildIds
     _product.change_sizea(obj).then(res => {
        console.log(res.data.data)
       this.f_det_det_str.basicInfo.minPrice=res.data.data.price
      this.$store.state.propertyChildIds=res.data.data.propertyChildIds
    })
  },
  //点击商品颜色进行赋值
  add_color(item,indexa){
    this.showcolora=indexa
   this.$store.state.color_id=item.id
   this.$store.state.color=item.name
     let obj={
     goodsId:this.f_det_det_str.basicInfo.id,
     propertyChildIds:item.id,
     id:this.id
   }
     _product.change_colora(obj).then(res => {
         this.f_det_det_str.basicInfo.minPrice=res.data.data.price
         console.log(res.data.data)
      this.$store.state.propertyChildIds=res.data.data.propertyChildIds
    })
  },
  //点击添加购物车进行数据添加赋值
  add_car(f_det_det_str){
    this.change_show=true
     this.$message({
          message: '商品已经成功加入购物车！！！',
          type: 'success'
        });
    this.$store.commit("add_car",f_det_det_str)
  },
  },
} 
</script>
<style>

</style>

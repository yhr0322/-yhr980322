<template>
  <div id="app"> 
  <div class="header">
<img src="./assets/logo.png" alt="">
<ul>
<router-link to="/" tag="li">在线商城</router-link>
<li>坚果Pro</li>
<li>Smartisan M1 / ML1</li>
<li>Smartisan OS</li>
<li>欢喜云</li>
<li>应用下载</li>
<li>官方论坛</li>
 <router-link to="/user" tag="li"><img src="./assets/user.png" alt=""></router-link>
 <router-link to="/car"  tag="li"><img src="./assets/car.png" alt="" @mouseover='over'><span>{{numbers*1}}</span></router-link>
</ul>
</div>
<div class="car_border" v-show="showa" @mouseout="out">
<p v-show="numbers===0">购物车空空如也！！！</p>
<p v-show="numbers!=0" v-for="(item,index) in carlist">商品：{{item.name}}/数量：{{item.product_info.is_insurance}}</p>
</div>
     <ul>
     <router-link to="/" tag="li" exact></router-link>
     </ul>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      showa:false
    }
  },
  computed: {
    numbers(){
      return this.$store.getters.numbers
    },
     carlist(){
      return this.$store.state.carlist
    },
  },
  methods: {
    over(){
      this.showa=true
    },
    out(){
      this.showa=false
    }
  },
} 
</script>
<style>

</style>

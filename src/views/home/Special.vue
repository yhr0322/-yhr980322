<template>
  <div> 
    <div class="special"> 
    <div class="special_top">
    <router-link to="/" tag="p"><i class="el-icon-arrow-left"></i></router-link>
    <router-link to="/Special" tag="p"><p class="p1">严选专栏</p></router-link>
    <p></p>
    </div>
    <ul>
    <li v-for="(item,index) in Special_list">
    <img :src="item.pic" alt="">
    <h4>{{item.title}}</h4>
    <span>{{item.descript}}</span>
    <router-link :to="'/special_det/'+item.id" tag="p">查看详情</router-link>
    </li>
    </ul>
    </div>
   
  
  </div>
</template>
<script>
import Product from '../../services/services'
const _product = new Product()
export default {
  name: 'Special',
   data() {
    return {
      Special_list:[]
    }
  },
  computed: {
  },
  created () {
    // pending - 等待
    _product.Special_list().then(res => {
      this.Special_list = res.data.data
      console.log( this.Special_list)
    })
  }
} 
</script>
<style>

</style>

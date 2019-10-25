<template>
  <div> 
   <div class="special_all">
   <div class="special_det_top">
    <router-link to="/Special" tag="p"><i class="el-icon-arrow-left"></i></router-link>
    <router-link to="/Special" tag="p"><p class="p1">专栏详情</p></router-link>
    <p></p>
    </div>
<p class="p2">{{special_all.title}}</p>
<img :src="special_all.pic" alt="">
<span>{{special_all.descript}}</span>
<div class="spec_det_det" v-html="special_all.content">

</div>
   </div>
   
  </div>
</template>
<script>
import Product from '../../services/services'
const _product = new Product()
export default {
  name: 'special_det',
  data() {
    return {
      special_all:[]
    }
  },
  created() {
     let id=this.$route.params.id
       console.log(id)
        _product.special_all(id).then(res => {
      this.special_all = res.data.data
      console.log( this.special_all)
    })
  },
  
} 
</script>
<style>

</style>

<template>
  <div> 
   <div class="fen_detail">
   <div class="fen_detail_top">
    <router-link to="/fen" tag="p"><i class="el-icon-arrow-left"></i></router-link>
    <router-link to="/fen_detail" tag="p"><p class="p1">砍价列表</p></router-link>
    <p></p>
    </div>

    <div class="f_det_img" v-show="f_det_lista.length<1">
     <img src="@/assets/img/shop.png" alt="">
    </div>

    <div class="f_det_list" v-show="f_det_lista.length>0">
    <ul>
    <li v-for="(item,index) in f_det_lista">
    <router-link :to="'/f_det_det/'+item.id">
    <img :src="item.pic" alt="">
    <span>{{item.name}}</span>
    <h4>{{item.name}}</h4>
    <div>
    <p class="f_det_p_price">￥{{item.minPrice}}</p>
    <p class="f_det_p_num">已售：{{item.numberSells}}</p>
    </div>
    </router-link>
    </li>
    </ul>
    </div>

   </div>
  </div>
</template>
<script>
import Product from '../../services/services'
const _product = new Product()
export default{
  name: 'fen_detail',
  data() {
    return {
      f_det_list:[],
      f_det_lista:[],
    }
  },
  created () {
    // pending - 等待
    let id=this.$route.params.id
      // console.log(id)
    _product.f_det_list(id).then(res => {
      this.f_det_list = res.data.data
      
    this.f_det_list.filter((item)=>{
      if(item.categoryId==id){
        this.f_det_lista.push(item)
      }
    })
     })
       console.log( this.f_det_lista)
  }
  
} 
</script>
<style>

</style>

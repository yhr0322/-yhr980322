<template>
  <div> 
  <div class="bbbb_all">
  <div class="bbbb_left">
  <ul>
  <li @click="filter_all" style="font-weight:100;">所有分类</li>
  <li v-for="(item,index) in bbbb_lista"><p @click="filter_list(item)">{{item.name}}</p> </li>
  </ul>
  </div>
  <div class="bbbb_right">
  <div class="bbbb_swiper">
  <div class="swiper">
  <van-swipe :autoplay="3000" indicator-color="white">
  <van-swipe-item><img src="@/assets/img/102.jpg" alt=""></van-swipe-item>
  <van-swipe-item><img src="@/assets/img/106.jpg" alt=""></van-swipe-item>
  <van-swipe-item><img src="@/assets/img/108.jpg" alt=""></van-swipe-item>
 </van-swipe>
  </div>
  </div>
  <ul>
  <li v-for="(item,index) in bbbb_listb">
  <router-link :to="'/fen_detail/'+item.id" >
  <img :src="item.icon" alt="">
  {{item.name}}
  
  </router-link>
  </li>
  </ul>
  </div>
  
  </div>  
  </div>
</template>
<script>
import axios from "axios"
import Product from '../../services/services'
const _product = new Product()
export default{
  name: 'bbbb',
  data() {
    return {
    
    }
  },
  computed: {
    bbbb_list(){
      return this.$store.state.bbbb_list
    },
     bbbb_lista(){
      return this.$store.state.bbbb_lista
    },
    bbbb_listb(){
      return this.$store.getters.bbbb_listb
    }
  },
  methods: {
    filter_list(item){
      this.$store.commit("filter_list",item)
      console.log(this.bbbb_listb)
      
    },
    filter_all(){
       this.$store.commit("filter_all")
    }
  },
  async created () {
          let res =  await axios.post('https://api.it120.cc/small4/shop/goods/category/all')
          this.$store.state.bbbb_list = res.data.data
           this.$store.state.bbbb_listb=this.$store.state.bbbb_list
    // pending - 等待
//     _product.bbbb_list().then(res => {
//       this.$store.state.bbbb_list = res.data.data
//       this.$store.state.bbbb_listb=this.$store.state.bbbb_list
// })
console.log( this.$store.state.bbbb_list)


      this.$store.state.bbbb_lista =this.$store.state.bbbb_list.filter((item)=>{
        if(item.type.charAt(item.type.length-1)!=2){
          console.log(item.name)
      return item
        }
      })
  },
//   beforeMount(){
//  this.$store.state.bbbb_lista =this.$store.state.bbbb_list.filter((item)=>{
//         if(item.type.charAt(item.type.length-1)!=2){
//           console.log(item.name)
//       return item
//         }
//       })
//   }
} 
</script>
<style>

</style>

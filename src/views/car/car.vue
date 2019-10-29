<template>
  <div> 
   <div class="car_all" style="padding-bottom:2rem;">
   <div class="car_top">
    <p class="p1"></p>
   <p>购物车</p>
    <p></p>
   </div>
  
   <div class="car_content">
      <div class="car_list" v-for="(item,index) in car_list"> 
      <input type="checkbox" v-model="item.checked" @change="change_statea">
      <img :src="item.f_det_det_str.basicInfo.pic" alt="">
      <div class="car_l_right">
      <h4>{{item.f_det_det_str.basicInfo.name}}</h4>
      <p>
<span> {{item.f_det_det_str.properties[0].name}}-{{item.size}}</span>
<span v-if="item.f_det_det_str.properties[1]"> {{item.f_det_det_str.properties[1].name}}-{{item.color}}</span>
      </p>
      <div class="car_l_but">
      <p >￥{{item.f_det_det_str.basicInfo.minPrice}}</p>
      <p class="car_l_but_p">
<button @click="add_jiana(item,index)">-</button>
<span>{{item.car_num}}</span>
<button @click="add_jiaa(item,index)">+</button></p>
      </div>
      </div>
      </div>
   </div>
   </div>
   <div class="footer_car_foot">
   <p>
    <input type="checkbox" v-model="car_checked.car_all_check" @change="change_all">全选
   </p>
  
   <div class="foot_car_right">
   <p>合计：￥{{car_all_price}} </p>
    <button @click="add_obj">下单</button>
   </div>
   </div>
    <footera></footera>
  </div>
</template>
<script>
import footera from "../../components/shouye/footera.vue"
export default {
  name: 'car',
  created() {
    if(this.car_all_price==0){
      this.car_checked.car_all_check=false
    }else{
       this.car_checked.car_all_check=true
    }
  },
  components:{
    footera
  },
  data() {
    return {
      
    }
  },
  computed: {
    car_list(){
      return this.$store.state.car_list
    },
    car_checked(){
      return this.$store.state.car_checked
    },
    car_all_price(){
      return this.$store.getters.car_all_price
    }
  },
  methods: {
    add_obj(){
     this.$store.commit("add_obj")
     if(this.car_all_price>0){
       if(this.$store.state.token!=''){
         this.$router.push('/order')
       }else{
          this.$router.push('/login')
          alert("请先登录！！！")
       }
       
     }else{
       alert("请添加您要购买的商品！")
     }
      },
    
    add_jiaa(item,index){
      item.car_num++
    },
    change_statea(){
   this.$store.commit("change_statea")
    },
     add_jiana(item,index){
       if( item.car_num>1){
          item.car_num--
       }else{
         item.car_num--
         this.car_list.splice(index,1)
       }
    },
    change_all(){
    this.$store.commit("change_all")
    }
},
  
} 
</script>
<style>

</style>

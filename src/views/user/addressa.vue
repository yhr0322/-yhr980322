<template>
  <div> 
  <div class="address_all">
  <div class="address_top">
   <router-link to="/user" tag="p"><i class="el-icon-arrow-left"></i></router-link>
    <router-link to="/addressa"><p>我的地址</p></router-link>
   <router-link to="/address_create" tag="p" class="p1">新建地址</router-link>
    </div>
  <div class="address_list">
  <ul>
  <li v-for="(item,index) in addressa_list_list">
  <div class="address_left" @touchstart="toucha($event)"  @touchend="touchb($event,index)">
  <input type="checkbox" @change="change_check(index)" v-model="item.isDefault">
  <div class="address_det">
  <p style="margin-top:0.15rem;">{{item.linkMan}} {{item.mobile}}</p>
  <p style="font-size:0.2rem;color:gray;">{{item.address}}</p>
  </div>
 <router-link to="/address_det_up"><span  @click="update_add(item,index)"><van-icon name="records" /></span></router-link>
  </div>
  <p class="address_right"> 
  删除
  </p>
  </li>
  </ul>
  
  </div>
  </div>
  </div>
</template>
<script>
import Product from '../../services/services'
const _product = new Product()
export default {
  name: 'addressa',
  data() {
    return {
      start_x:'',
      end_x:'',
    }
  },
  created() {
    let tonken=this.$store.state.token
     _product.addressa_list_list(tonken).then(res => {
      this.$store.state.addressa_list_list = res.data.data
    })
  },
  computed: {
     addressa_list_list(){
       return this.$store.state.addressa_list_list
     }
  },
methods: {
  change_check(indexa){

      this.$store.commit("change_check",indexa)
  },
  update_add(item,index){
    this.$store.state.add_id=item.id
   
   
  },
  toucha($event){
       this.start_x=$event.changedTouches[0].pageX
       
       },
       touchb($event,index){
   this.end_x=$event.changedTouches[0].pageX
         let div=document.getElementsByClassName("address_right")
          let diva=document.getElementsByClassName("address_left")
         if(this.start_x-this.end_x>40){
         diva[index].style.left="-1.5rem"
         div[index].style.right='0rem'
       
           console.log("左滑")
         }else if(this.start_x-this.end_x<-40){
            diva[index].style.left="0rem"
         div[index].style.right='-1.5rem'
           console.log("油滑")
         }
       }
},  
} 
</script>
// <style>

</style>

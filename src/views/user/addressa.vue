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
  <input type="checkbox" @change="change_check(index)" v-model="item.isDefault">
  <div class="address_det">
  <p style="margin-top:0.15rem;">{{item.linkMan}} {{item.mobile}}</p>
  <p style="font-size:0.2rem;color:gray;">{{item.address}}</p>
  </div>
 <router-link to="/address_det_up"><span  @click="update_add(item,index)"><van-icon name="records" /></span></router-link>

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
    console.log(this.$store.state.add_id)
   
  }
},  
} 
</script>
// <style>

</style>

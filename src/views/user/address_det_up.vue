<template>
  <div> 
  <div class="create_all">
   <div class="create_top">
    <router-link to="/addressa" tag="p"><i class="el-icon-arrow-left"></i></router-link>
    <p>编辑地址</p>
    <p></p>
    </div>
  <div class="address_create">
  <ul>
  <li>
  <span>联系人</span>
  <input type="text" placeholder="姓名" v-model="addressab.user">
  </li>
 <li>
  <span>手机号码</span>
  <input type="text" placeholder="11位手机号码" v-model="addressab.phone">
  </li><li>
  <select v-model="addressab.address_one" @change="change_add_one(addressab.address_one)">
                      <option value="请选择">请选择</option>
                    <option v-for="(item,index) in address_list"   :value="item.name">{{item.name}}</option>
           </select>
   <select v-model="addressab.address_two"  @change="change_add_two(addressab.address_two)">
     <option value="请选择">请选择</option>
                   <option v-for="(item,index) in  address_lista"   :value="item.name">{{item.name}}</option>
           </select>       
  </li><li>
  <span>详细地址</span>
  <input type="text" placeholder="街道门牌信息" v-model="addressab.address_det">
  </li><li>
  <span>邮政编码</span>
  <input type="text" placeholder="邮政编码" v-model="addressab.number_add">
  </li>
  </ul>
  <router-link  to="/addressa"><button class="create_buta" @click="up_addressa">确认编辑</button></router-link>
  <router-link  to="/addressa"><button class="create_butb" @click="delete_add">删除</button></router-link>
  <button class="create_butc">取消</button>
  </div>
  </div>
  </div>
</template>
<script>
import Product from '../../services/services'
const _product = new Product()
import axios from "axios"
export default {
  name: 'address_create',
  data() {
    return {
      address_list:[],
      address_lista:[],
     
    }
  },
  computed: {
    addressab(){
      return this.$store.state.addressab
    }
  },
  created() {
    ////在此axios请求数据
    axios.post("https://api.it120.cc/common/region/province").then((res)=>{
      this.address_list=res.data.data
    })
  },
  methods: {
    delete_add(){
     let id=this.$store.state.add_id
     console.log(id)
     let tonken=this.$store.state.token
     _product.det_addressa_list(tonken,id).then(res => {
      this.$store.state.addressa_list_list = res.data.data
    })
    },
    up_addressa(){
      let id=this.$store.state.add_id
  
     let tonken=this.$store.state.token
     _product.up_addressa_list(tonken,id).then(res => {
       console.log(res)
       this.$store.state.addressa_list_list = res.data.data
    })
    },
    change_add_one(str){
     
      this.address_list.filter((item)=>{
        if(item.name==str){
          this.addressab.id=item.id
        }
      })
     console.log( this.addressab.id)
      let id= this.addressab.id
      axios.post(`https://api.it120.cc/common/region/child?pid=${id}`).
      then((res)=>{
        console.log(res)
       this.address_lista=res.data.data
      })
   
     
    },
    change_add_two(str){
        this.address_lista.filter((item)=>{
         if(item.name==str){
          this.addressab.ida=item.id
          }
         })
         console.log(this.addressab.ida)
   
    }
  },
  
} 
</script>
<style>

</style>

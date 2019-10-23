<template>
  <div>
   <div class="title">
<ul class="title_ula">
<li>首页</li>
<li>·</li>
<li>手机</li>
<li>·</li>
<li>“足迹系列”手感膜</li>
<li>·</li>
<li>官方配件</li>
<li>·</li>
<li>周边产品</li>
<li>·</li>
<li>第三方配件</li>
<li>·</li>
<li>全部商品</li>
<li>·</li>
<li>服务</li>
</ul>
</div>
<div class="user_all">
<div class="user_user">
<img src="../assets/untitled.png" alt="">
<p><router-link to="/order" tag="span">我的订单</router-link></p>
<p style="background:#6086e7">收获地址</p>
</div>
<div class="user_new">
<div class="top">
<span>收货信息</span>
<button @click="showa">+添加新地址</button>
</div>
<div class="bottom" v-for="(item,index) in address_list">
<p class="bot_p1">{{item.name}}</p>
<p class="bot_p2">{{item.value1}} {{item.value2}}{{item.value3}}{{item.detail_address}}</p>
<p class="bot_p3">{{item.phone}}</p>
<p class="bot_p4"><input type="checkbox" v-model="item.checked" @change="change_checked(index)">设为默认</p>
<p class="bot_p5"><button @click="address_updata(item)">编辑</button><button @click="user_del(index)">删除</button></p>
</div>
</div>
<div class="add" v-show="this.$store.state.show.showa">
<p>管理收货地址</p>
<ul>
<li class="add_li1"><input type="text" v-model="value.name"  placeholder="收货人姓名"></li>
<li class="add_li2"><input type="text" v-model="value.phone"  placeholder="收货人手机号"></li>
<li class="add_li3">
<select v-model="value.value1" @change="changev1">
                    <option v-for="(item,index) in address" :value="item.area_name">{{item.area_name}}</option>
           </select>
</li>
<li class="add_li4">
<select v-model="value.value2"  @change="changev2">
                    <option v-for="(item,index) in addressone"   :value="item.area_name">{{item.area_name}}</option>
           </select>
          
<select v-model="value.value3" >
                   <option v-for="(item,index) in addresstwo"   :value="item.area_name">{{item.area_name}}</option>
           </select>
</li>
<li class="add_li5"><input type="text" v-model="value.detail_address" placeholder="详细地址，如街道名称，楼层，门牌号码等"></li>
<li class="add_li6"><input type="checkbox" v-model="value.checked">设为默认</li>
<li class="add_li7"><button @click="add_new(value)">保存</button></li>
</ul>
</div>
</div>
  </div>
</template>
<script>
import axios from "axios"
//import storea from "../store/indexa.js"
export default {
  name:'suser',
  data () {
    return {
   
    }
  },
  created() {
    axios.get("../static/json/address.json").then((res)=>{
      this.$store.state.address=res.data
    })
//storea.save("address", this.$store.state.address)
  },
  computed: {
    address(){
      return this.$store.state.address
    },
     addressone(){
      return this.$store.state.addressone
    },
     addresstwo(){
      return this.$store.state.addresstwo
    },
    value(){
      return this.$store.state.value
    },
    address_list(){
      return this.$store.state.address_list
    }
  },
  methods: {
    changev1(){
      this.$store.commit("changev1")
    },
     change_checked(i){
      this.$store.commit("change_checked",i)
    },
    changev2(){
       this.$store.commit("changev2")
    },
    add_new(value){
      this.$store.commit("add_new",value)
    },
    showa(){
      this.$store.commit("showa")
    },
    user_del(index){
      this.$store.commit("user_del",index)
    },
    address_updata(item){
       this.$store.commit("address_updata",item)
    }
  },
}
</script>


</style>

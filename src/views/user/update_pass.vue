<template>
  <div> 
   <div class="update_all">
    <h4>密码修改</h4>
    <div class="update_phone">
 <input type="text" placeholder="手机号码" v-model="up_phone">
 <van-icon name="phone-circle-o" />
    </div>
     <div class="update_pas" v-show="showa">
 <input type="text" placeholder="新密码" v-model="up_password">
 <van-icon name="eye-o"  @click="tooglea" />
  </div>
  <div class="update_pas" v-show="!showa">
 <input type="password" placeholder="新密码" v-model="up_password">
 <van-icon name="closed-eye" @click="toogleb" />
     </div>
    <div class="update_img">
 <input type="text" placeholder="图形验证" v-model="pic_up">
 <img :src="`https://api.it120.cc/small4/verification/pic/get?key=${this.time}`" alt="" @click="toogle_src"  ref="ref">
    </div>
 <div class="update_yz">
 <input type="text" placeholder="验证码" v-model="up_numcode">
 <button @click="update_img">获取验证码</button>
    </div>
    <button class="update_but" @click="update_sub">立即修改</button>

 

    </div>
  </div>
</template>
<script>
import Product from '../../services/services'
const _product = new Product()

export default{
  name: 'update_pass',
  created() {
    let reg_num=new Date().getTime()
    this.time=reg_num
    
  },
  data() {
    return {
      up_phone:'',
       showa:true,
      up_password:'',
      pic_up:'',
      up_numcode:'',
      time:''

    }
  },
  methods: {
    tooglea(){
      this.showa=false
    },
     toogleb(){
      this.showa=true
    },
    toogle_src(){
      let timea=new Date().getTime()
      this.time=timea
this.$refs.ref.src="`https://api.it120.cc/small4/verification/pic/get?key=${this.time}`"
      
    },
    update_img(){
       let obj_up={
        pic_up:this.pic_up,
        time:this.time,
        phone:this.up_phone
      }
        _product.update_img(obj_up).then(res => {
     
     console.log(res)
     
    })
    },
    update_sub(){
      let obj_update={
        phone:this.up_phone,
        pwd:this.up_password,
        code:this.up_numcode
      }
       _product.update_sub(obj_update).then(res => {
     
      console.log(res)
     
    })
    }
  },
  
  
  
} 
</script>
<style>

</style>

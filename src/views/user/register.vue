<template>
  <div> 
    <div class="register_all">
    <h4>新用户验证</h4>
    <span>很高心您将成为商城的会员（注册只需要一步）</span>
    <div class="register_phone">
 <input type="text" placeholder="手机号码" v-model="rphone">
 <van-icon name="phone-circle-o" />
    </div>
     <div class="register_pas" v-show="showa">
 <input type="text" placeholder="密码" v-model="rpassword">
 <van-icon name="eye-o"  @click="tooglea" />
  </div>
  <div class="register_pas" v-show="!showa">
 <input type="password" placeholder="密码" v-model="rpassword">
 <van-icon name="closed-eye" @click="toogleb" />
     </div>
      <div class="register_pas" v-show="showb">
 <input type="text" placeholder="确认密码">
 <van-icon name="eye-o"  @click="tooglec" />
  </div>
  <div class="register_pas" v-show="!showb">
 <input type="password" placeholder="确认密码">
 <van-icon name="closed-eye" @click="toogled" />
     </div>
    <div class="register_user">
 <input type="text" placeholder="用户名" v-model="ruser">
 <van-icon name="manager-o" />
    </div>
    <div class="register_img">
 <input type="text" placeholder="图形验证" v-model="pic_str">
 <img src="https://api.it120.cc/small4/verification/pic/get" alt="">
    </div>
 <div class="register_yz">
 <input type="text" placeholder="验证码">
 <button>获取验证码</button>
    </div>
    <button class="reg_but">立即注册</button>

 <router-link to="/login"><p class="reg_login">已有账号，立即登录</p></router-link>



    </div>
  </div>
</template>
<script>
import Product from '../../services/services'
const _product = new Product()
export default {
  name: 'register',
  created() {
    let reg_num=new Date().getTime()
    console.log(reg_num)
    _product.reg_num(reg_num).then(res => {
     
      console.log(res)
     
    })
  },
  data() {
    return {
      rphone:'',
      rpassword:'',
      ruser:'',
        showa:true,
        showb:true,
        pic_str:''
    }
  },
  methods: {
    tooglea(){
      this.showa=false
    },
     toogleb(){
      this.showa=true
    },
    tooglec(){
      this.showb=false
    },
     toogled(){
      this.showb=true
    },
  },
} 
</script>
<style>

</style>

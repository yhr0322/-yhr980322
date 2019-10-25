<template>
  <div> 
  <div class="login_top"> 
  
  <h3>账号登录</h3>
    <p>衡瑞--严选商城欢迎您</p>
    <div class="login_phone">
 <input type="text" placeholder="手机号码" v-model="phone">
 <van-icon name="phone-circle-o" />
    </div>
     <div class="login_pas" v-show="show">
 <input type="text" placeholder="密码" v-model="password">
 <van-icon name="eye-o"  @click="tooglea" />
  </div>
  <div class="login_pas" v-show="!show">
 <input type="password" placeholder="密码" v-model="password">
 <van-icon name="closed-eye" @click="toogleb" />
     </div>
    <button @click="sub">登录</button>
    <router-link tag="span" to="/update_pass">忘记密码</router-link>
    <router-link tag="h4" to="/register">还没有注册？立即注册</router-link>
  
  
  </div>
  
  </div>
</template>
<script>
import Product from '../../services/services'
const _product = new Product()
export default {
  name: 'login',
  data() {
    return {
    
         phone:'',
      password:"",
     
     
      show:true
    }
  },
  methods: {
    tooglea(){
      this.show=false
    },
     toogleb(){
      this.show=true
    },
    sub(){
      let str={
        phone:this.phone,
        password:this.password
      }
       _product.login_sub(str).then(res => {
     if(res.data.code==0){
       alert("登录成功")
        this.$store.commit("sub",this.phone)
       this.$router.push("/user")
     }else if(res.data.code==500){
       alert("账号或密码不正确，请重新输入")
     }
     
    })
    }
    

  },
  
  }

</script>
<style>

</style>

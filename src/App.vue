<template>
  <div id="app"> 
        <div style="position: fixed;z-index:15; top: 0; left: 0; background: white; opacity: 0.8; width: 100%; height: 1000px; text-align:center; padding-top: 420px; font-size: 100px;" v-show="isLoading">
    <div class='loader'>
  <div class='loader_overlay'></div>
  <div class='loader_cogs'>
    <div class='loader_cogs__top'>
      <div class='top_part'></div>
      <div class='top_part'></div>
      <div class='top_part'></div>
      <div class='top_hole'></div>
    </div>
    <div class='loader_cogs__left'>
      <div class='left_part'></div>
      <div class='left_part'></div>
      <div class='left_part'></div>
      <div class='left_hole'></div>
    </div>
    <div class='loader_cogs__bottom'>
      <div class='bottom_part'></div>
      <div class='bottom_part'></div>
      <div class='bottom_part'></div>
      <div class='bottom_hole'></div>
    </div>
    <p>loading</p>
  </div>
</div>
     </div>    
     <hr>
       <transition name="fade">
     
   
    <router-view/>
      
     
     </transition>
     
  </div>
</template>
<script>
import axios from "axios"
export default {
  name: 'App',
   data(){
    return{
       isLoading: true
    }
  },
  created () {
          // 添加响应拦截器
          axios.interceptors.response.use( (response) => {
              // 对响应数据做点什么
              this.isLoading = false // 数据请求成功isloading改为false，loading隐藏掉
              return response;
          });
          axios.interceptors.request.use((res)=>{
            // let that=this setTimeout(()=>{
              this.isLoading=true
         
      return res
    })
          
      }
} 
</script>
<style>

</style>

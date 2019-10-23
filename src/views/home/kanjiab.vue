<template>
  <div> 
    
    <div class="kanjiablist">
    <div class="kanjiab_top">
    <router-link to="/" tag="p"><i class="el-icon-arrow-left"></i></router-link>
    <router-link to="/kanjiab" tag="p"><p class="p1">砍价列表</p></router-link>
    <p></p>
    </div>
   
   <ul>
   <router-link  v-for="(item,index) in kanjialist" :to="{ path:'/kanjiadetail',query:{id:item.id}}">
   <li style="border-bottom:0.01rem solid black;">
   <img :src="item.pic" alt="">
   <div class="kanjiab_right">
   <p class="kanjiab_title">{{item.name}}</p>
   <p class="kanjiab_content">{{item.characteristic}}</p> 
   <div class="kanjiab_r_bottom">
   <p>{{item.minPrice}} <br> 低价</p>
   <p>{{item.originalPrice}} <br> 原价</p>
   <p>{{item.stores}} <br> 限量</p>
   </div>
   </div>
   </li>
   </router-link>
   </ul>
   </div>
  
  </div>
</template>
<script>
export default {
  name: 'kanjiab',
   computed: {
   
     kanjialist(){
      return this.$store.state.kanjialist
    },
    
  },
} 
</script>
<style>

</style>

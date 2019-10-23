<template>
  <div> 
    <div class="kanjialist">
   <router-link to="/kanjiab"><p class="p1">全名砍价 > </p></router-link>
   <ul>
   <li v-for="(item,index) in kanjialist">
   <img :src="item.pic" alt="">
   <div class="kanjia_right">
   <p class="kanjia_title">{{item.name}}</p>
   <p class="kanjia_content">{{item.characteristic}}</p> 
   <div class="kanjia_r_bottom">
   <p>{{item.minPrice}} <br> 低价</p>
   <p>{{item.originalPrice}} <br> 原价</p>
   <p>{{item.stores}} <br> 限量</p>
   </div>
   </div>
   </li>
   </ul>
   </div>
   
   
  </div>
</template>
<script>
export default {
  name: 'kanjiaa',
  computed: {
   
     kanjialist(){
      return this.$store.state.kanjialist
    },
    
  },
} 
</script>
<style>

</style>

<template>
  <div> 
  <div class="scroll">
   <router-link to="/Special"><p class="p1">精选专题 > </p></router-link>
   <div class="scroll_parent" ref="scroll_parent">
   <ul class="scroll_content">
   <li v-for="(item,index) in scrolllist">
   <img :src="item.pic" alt="">
   <h4>{{item.title}}</h4>
   <p>{{item.descript}}</p>
   </li>
   </ul>
   </div>
   </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'scrolla',
  computed: {
     scrolllist(){
      return this.$store.state.scrolllist
    },
  },
  mounted() {
       this.$nextTick(() => { // 使用 this.$nextTick 为了确保组件已经渲染完毕 
   this.scroll = new BScroll(this.$refs.scroll_parent, {
     scrollX: true,
            scrollY: false,
   }) // 实例化BScroll接受两个参数，第一个为父盒子的dom节点 })作者：前端艾希
         })
   
  },
} 
</script>
<style>

</style>

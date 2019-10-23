<template>
 <div class="useraaa">
<div class="shouye">
<p class="title">主页/</p>
<img :src="listta.avatar_url" alt=""><span>{{listta.loginname}}</span>
<p class="p1">{{listta.score}}积分</p>
<p class="data">注册时间：{{listta.create_at | formatTime }}</p>
</div> 
<div class="date">
<p class="title" style="color:black">最近创建的话题</p>
<ul v-for="(item,index) in listta.recent_topics" class="list-ul">
   <router-link :to="'/user/'+item.author.loginname"  class="li1" tag="li"><img :src="item.author.avatar_url" alt="" :title="item.author.loginname"></router-link>
   <li class="li2">555/13135</li>
       <li class="li3">{{item.tab}}</li>
     <router-link :to="'/work/'+item.id" tag="li" class="li4">{{item.title}}</router-link>
   <li class="li5">55555</li>
    <li class="li6">{{item.last_reply_at | formatTime }}</li>
</ul>
<p class="title2">点击查看更多</p>
</div>
<div class="canyu">
<p class="title" style="color:black">最近参与的话题</p>
<ul v-for="(item,index) in listta.recent_replies" class="list-ul">
   <router-link :to="'/user/'+item.author.loginname"  class="li1" tag="li"><img :src="item.author.avatar_url" alt="" :title="item.author.loginname"></router-link>
   <li class="li2">555/13135</li>
       <li class="li3">{{item.tab}}</li>
     <router-link :to="'/work/'+item.id" tag="li" class="li4">{{item.title}}</router-link>
   <li class="li5">55555</li>
    <li class="li6">{{item.last_reply_at | formatTime }}</li>
</ul>
<p class="title2">点击查看更多</p>
</div>
  </div>
</template>
<script>
import axios from "axios"
export default {
  name: 'aaa',
   data () {
    return {
     listta:[],
     name:''
    }
  },
   created() {
     this.name=this.$route.params.name
      axios.get('https://www.vue-js.com/api/v1/user/'+this.name).then((res)=>{
      console.log(res.data)
      this.listta=res.data.data
    })
  }
}
</script>
<style scoped>
</style>

<template>
<div>
<div class="header">
  <div>
   <img src="../assets/logoa.png" alt="">
   <input type="text" placeholder="在此搜索内容">
  </div>
  <ul>
   <router-link to="/" tag="li" ><p @click="changa">首页</p></router-link>
  <li>未读消息</li>
  <li @click="alerta">微信公众号</li>
  <li @click="alertb">VUE 2.0</li>
  <li @click="alertb">参考资料</li>
  <li @click="alertb">API</li>
  <li @click="alertb">关于</li>
  <li @click="alertb">设置</li>
   <router-link to="/login" tag="li">登录</router-link>
  </ul>
  </div>
<ul class="head">
     <router-link to="/" tag="li" exact><p @click="changa">首页</p></router-link>
     <router-link to="/" tag="li"><p @click="changea('good')">精华</p></router-link>
     <router-link to="/" tag="li"><p @click="change('weex')">Weex</p></router-link>
     <router-link to="/" tag="li"><p @click="change('ask')">问答</p></router-link>
     <router-link to="/" tag="li"><p @click="change('share')">分享</p></router-link>
     <router-link to="/" tag="li"><p @click="change('job')">招聘</p></router-link>
     
     
     </ul>
  <div class="hello">
   <div class="zuo">
   <div v-for="(item,index) in get()" class="list">
   
   
   <ul class="list-ul">
   <router-link :to="'/user/'+item.author.loginname"  class="li1" tag="li"><img :src="item.author.avatar_url" alt="" :title="item.author.loginname"></router-link>
   <li class="li2">{{item.reply_count}}/{{item.visit_count}}</li>
       <li class="li3">{{item.tab}}</li>
     <router-link :to="'/work/'+item.id" tag="li" class="li4">{{item.title}}</router-link>
  
</ul>
 <ul class="list-ul2">
  <li class="li5"><img :src="item.author.avatar_url" alt="" :title="item.author.loginname"></li>
    <li class="li6">{{item.last_reply_at | formatTime }}</li>
 </ul>
 </div>
 <button @click="one">1</button>
 <button @click="two">2</button>
 <button @click="three">3</button>
 <button @click="four">4</button>
   </div>
   <div class="you">
   <div class="user">
   <p>个人信息</p>
   <p>13213</p>
   <p>积分：132</p>
   <p>"这个家伙很懒，什么个性签名都没有留下来"</p>
   </div>
   <div class="update">
    <router-link to="/updata" tag="button">发布话题</router-link>
   </div>
   <img class="imgtu" src="../assets/tu1.png" alt="">
   <img class="imgtu" src="../assets/tu2.png" alt="">
   <img class="imgtu" src="../assets/tu3.png" alt="">
   <img class="imgtu" src="../assets/tu4.png" alt="">
   </div>
   <router-view/>
  </div>
  </div>
</template>
<script>
import axios from "axios"
export default {
  name: 'home',
  data () {
    return {
     homelist:[],
     newlist:[],
     postPage:1
    
    }
  },
  created() {
    axios.get("https://www.vue-js.com/api/v1/topics",
            { params:{
                        page: this.postPage,
                        limit:20
                       
                        }
                    }).then((res)=>{
      this.homelist=res.data.data
      
    })
    
  },methods: {
    one(){
      this.postPage=1
      console.log(this.postPage)
    },
    two(){
      this.postPage=2
    },
    three(){
      this.postPage=3
    },
    four(){
      this.postPage=4
    },
    alerta(){
      alert("是不是还没有关注，扫右下方得二维码，可以免费获取学习资料！！")
    },
    alertb(){
      alert("小编正在努力完善中，敬请期待！！！")
    },
        change(val){
             axios.get("https://www.vue-js.com/api/v1/topics").then((res)=>{
               this.newlist=res.data.data
      this.homelist=this.newlist.filter(item=>{
        
        return item.tab==val
             })
             })
        },
        changea(val){
             axios.get("https://www.vue-js.com/api/v1/topics").then((res)=>{
               this.newlist=res.data.data
      this.homelist=this.newlist.filter(item=>{
        
        return item.good==true
             })
             })
        },
        changa(){
           axios.get("https://www.vue-js.com/api/v1/topics").then((res)=>{
      this.homelist=res.data.data})
        },

      get(){
       return this.homelist.filter((item,index)=>{
          if(item.top==true){
            this.homelist[index].tab="置顶"
           
          }else if(item.tab=='ask'){
            this.homelist[index].tab="问答"
          }
          else if(item.tab=='share'){
            this.homelist[index].tab="分享"
          }
          return this.homelist
        })
      }
    },
    watch:{
      postPage:{
         handler:function(){
            axios.get("https://www.vue-js.com/api/v1/topics",
            { params:{
                        page: this.postPage,
                        limit:20
                       
                        }
                    }).then((res)=>{
      this.homelist=res.data.data
      
    })
      }
    }
    }
}
</script>
<style scoped lang="scss">

</style>

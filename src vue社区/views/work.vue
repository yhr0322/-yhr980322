<template>
 <div > 
 
 <h2 style="margin:15px 0">
 <span class="li3">
 {{listt.tab}}
 </span> {{listt.title}}
 <button style="margin-left:300px" @click="add" v-show="!show">点击收藏</button>
 <button style="margin-left:300px" @click="ass" v-show="show">取消收藏</button>
 </h2>
 <p style="line-height:40px">
 ·发布于{{listt.create_at | formatTime }}
 ·作者{{listt.author.loginname}}·{{listt.visit_count}}次浏览
 ·最后一次编辑是{{listt.last_reply_at | formatTime}}
 ·来至{{listt.tab}}
 </p>
<div v-html="listt.content"></div>
<p class="sum">{{listt.replies.length}}回复</p>
<div v-for="(item,index) in listt.replies" class="pin">

<p>
    <img :src="item.author.avatar_url" alt="">
    <span v-html="item.author.loginname"></span>
    <span style="color:blue">{{index+1}}楼·{{item.last_reply_at | formatTime }}</span>
    
    <span @click="good(item)">👍</span>
    <span style="display:inline-block,margin:0 10px">{{item.ups.length}}</span>
    <span @click="ask(index)">📝</span>
</p>
<p v-html="item.content"></p>
<p class="ret" style="display:none">
<input type="text" class="rett" :value="`@${item.author.loginname}`+' '">
<button @click="showa(item,index)" >提交</button>
</p>
</div>
<div class="tijiao">
<input type="text" v-model="del">
<button @click="submit" >提交</button>
</div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'bbb',
   data () {
    return {
     listt:[],
    id:'',
    show:false,
    del:""
    }
  },
  created() {
     this.id=this.$route.params.id
      axios.get('https://www.vue-js.com/api/v1/topic/'+this.id).then((res)=>{
      this.listt=res.data.data
    })
  },
  methods: {
    submit(){
       axios.post(`https://www.vue-js.com/api/v1/topic/${this.listt.id}/replies`,{
      accesstoken:"b0cad714-affc-4b5d-8c8a-91b1f896974e",
      content:this.del,
      topic_id:this.listt.id,
    }).then((res)=>{
    })
   
    },
    showa(item,index){
 let ret = document.getElementsByClassName("ret")[index]
 let rett=document.getElementsByClassName("rett")[index]
 console.log(rett.value)
    ret.style.display="none"
    axios.post(`https://www.vue-js.com/api/v1/topic/${this.listt.id}/replies`,{
      accesstoken:"b0cad714-affc-4b5d-8c8a-91b1f896974e",
      content:rett.value,
      topic_id:this.listt.id,
      reply_id:item.id
    }).then((res)=>{
    })
     console.log(this.listt.id)
      console.log(item.id)
    },
    ask(index){
    let ret = document.getElementsByClassName("ret")[index]
    ret.style.display="block"
  },
    good(item){
    let id = item.id;
    axios.post(`https://www.vue-js.com/api/v1/reply/${id}/ups`,{
      accesstoken:"b0cad714-affc-4b5d-8c8a-91b1f896974e"
    }).then((res)=>{
      if(res.data.action == "up"){
        item.ups.push(1)
      }else if(res.data.action == "down"){
        item.ups.shift()
      }
    })
  },
    add(){
      axios.post('https://www.vue-js.com/api/v1/topic/collect',{
      accesstoken:"b0cad714-affc-4b5d-8c8a-91b1f896974e",
      topic_id:this.listt.id
    }).then((res)=>{
      this.show=true;
      alert('加入收藏成功')
    })
    },
     ass(){
      axios.post('https://www.vue-js.com/api/v1/topic/de_collect',{
      accesstoken:"b0cad714-affc-4b5d-8c8a-91b1f896974e",
      topic_id:this.listt.id
    }).then((res)=>{
      this.show=false;
      alert('取消收藏成功')
    })
  }
    }
  }

</script>
<style scoped>
</style>

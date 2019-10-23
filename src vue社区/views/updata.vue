<template>
  <div>
   <span>选择板块：</span>
			<select v-model="selected" >
                    <option value="share">分享</option>
                    <option value="ask">问答</option>
                    <option value="job">招聘</option>
                     <option value="weex">weex</option>
           </select>
           <br>
           <span>发布话题得标题：</span>
           <input type="text" v-model="inputval">
           <br>
           <span>发表内容：</span>
			<textarea maxlength="20" id="text1" v-model="message" placeholder="20字以内"></textarea>
      <br>
      <button @click="updata">确认发布</button>
 </div>
</template>
<script>
import axios from "axios"
export default {
  name: 'updata',
  data () {
    return {
      con: '',
      selected:'',
      inputval:"",
      message:"",
      accesstoken:'b0cad714-affc-4b5d-8c8a-91b1f896974e',
    }
  },
  methods: {
    updata(){
    axios.post('https://www.vue-js.com/api/v1/topics',{
    accesstoken:'b0cad714-affc-4b5d-8c8a-91b1f896974e',
    title:this.inputval,
    tab: "ask",
    content:this.message
  }).then((res)=>{
    console.log(res)
  })
  }}
}
</script>
<style scoped>
</style>

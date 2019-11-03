<template>
  <div class="hello">
     <input type="text" placeholder="在此回车搜索" v-model="input_value">
     <p>{{input_value}}</p>
     <ul>
     <li v-for="(item,index) in input_valuea">{{item.hos_name}}</li>
     </ul>
  </div>
</template>
<script>
import axios from "axios"
export default {
  name: 'HelloWorld',
  data () {
    return {
      list:[],
     input_value:'',
    }
  },
  created() {
    axios.get("/api/home/index613/ver/V689/type/4/key/水光针/").then((res) => {
    this.list=res.data.data.list
   })
  },
  computed: {
    input_valuea(){
      return   this.list.filter((item)=>{
      
         return item.hos_name.includes(this.input_value)
    
     })
    }
  },
  methods: {
    
  },
}
</script>
<style scoped lang="scss">

</style>

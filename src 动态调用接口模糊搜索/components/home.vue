<template>
  <div class="hello">
     <input type="text" placeholder="在此回车搜索" v-model="obj.input_value">
     <ul>
     <li v-for="(item,index) in list">{{item.hos_name}}</li>
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
      obj:{
         input_value:'',
      }
    
    }
  },
  created() {
  },
  computed: {
  },
  watch: {
    obj: {
                handler(newName, oldName) {
            let keya=this.obj.input_value
            axios.get(`/api/home/index613/ver/V689/type/4/key/${keya}`).then((res) => {
            this.list=res.data.data.list
            console.log(this.list)
    })
                },
                // immediate: true, // 初始化执行一次
                deep: true // 深度监听
            },
  },
  // methods: {
  //   changea(){
  //    alert("123")
  //     let keya=this.input_value
  //     console.log(keya)
     


  //        axios.get(`/api/home/index613/ver/V689/type/4/key/${keya}`).then((res) => {
  //   this.list=res.data.data.list
  //   console.log(this.list)
  //  })
    
      
  //   }
  // },
}
</script>
<style scoped lang="scss">
</style>

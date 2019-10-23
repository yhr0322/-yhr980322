<template>
  <div> 
  <div class="bbbb_all">
  <div class="bbbb_left">
  <ul>
  <li>所有分类</li>
  <li v-for="(item,index) in bbbb_lista"><p @click="filter_list(item)">{{item.name}}</p> </li>
  </ul>
  </div>
  <div class="bbbb_right">
  </div>
  
  </div>  
  </div>
</template>
<script>
import Product from '../../services/services'
const _product = new Product()
export default{
  name: 'bbbb',
  data() {
    return {
    
    }
  },
  computed: {
    bbbb_list(){
      return this.$store.state.bbbb_list
    },
     bbbb_lista(){
      return this.$store.state.bbbb_lista
    },
    bbbb_listb(){
      return this.$store.state.bbbb_listb
    }
  },
  methods: {
    filter_list(item){
      this.$store.commit("filter_list",item)
    }
  },
  created () {
    // pending - 等待
    _product.bbbb_list().then(res => {
      this.$store.state.bbbb_list = res.data.data
     // console.log(this.$store.state.bbbb_list)
})
     this.$store.state.bbbb_lista =this.$store.state.bbbb_list.filter((item)=>{
        if(item.type.charAt(item.type.length-1)!=2){
      return item
        
        }
      })
  }
} 
</script>
<style>

</style>

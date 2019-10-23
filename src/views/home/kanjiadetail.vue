<template>
  <div> 
    
   
  <p>砍价详情</p>
  </div>
</template>
<script>
import Product from '../../services/services'
const _product = new Product()
export default {
  name: 'kanjiadetail',
  data() {
    return {
      kanjiadetail:[]
    }
  },
  created () {
    let id=this.$route.query.id
   
    _product.kanjiadetail(id).then(res => {
      this.kanjiadetail = res.data
      console.log( this.kanjiadetail)
    })
  }
} 
</script>
<style>

</style>

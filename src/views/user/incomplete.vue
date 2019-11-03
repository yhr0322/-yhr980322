<template>
  <div> 
   <p>这是订单的某一个页面</p>
  </div>
</template>
<script>

import Product from '../../services/services'
const _product = new Product()
export default{
  name: 'imcomplete',
  created() {
    let token=this.$store.state.token
     _product.list_order_list(token).then(res => {
       this.$store.state.order_listnum=res.data.data.goodsMap
     console.log( this.$store.state.order_listnum)
    })
  },
} 
</script>
<style>

</style>

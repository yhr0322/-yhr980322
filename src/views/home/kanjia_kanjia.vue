<template>
  <div> 
   <div class="kankan_all">
   <div class="kankan_top">
    <van-icon name="manager-o" />
    <p class="kankan_str">我发现一件好货，来帮我砍刀最低价吧~</p>
     <div class="kan_shop">
       <img :src="clickitem.pic" alt="">
       <div>
       <h4>{{clickitem.name}}</h4>
       <p><span style="color:#b09479;">底价：￥{{kankan_shop.minPrice}}</span><span> <s>原价：￥{{kankan_shop.curPrice}}</s> </span></p>
       </div>
     </div>
     <p v-show="showaaa" class="kankan_price">当前价<span>{{kankan_shop.curPrice-kanjia_shopaa.cutPrice}}</span>元,已砍<span>{{kanjia_shopaa.cutPrice}}</span>元</p>
     <button v-show="showaaa"  class="kankan_but">以当前价购买</button>
     <button v-show="showaaa"  class="kankan_butt">邀请好友砍价</button>
     <span v-show="!showaaa"  class="kanjia_yi" @click="kanjiaa">自己砍一刀</span>
     <van-count-down v-show="showaaa"  :time="time">
                    <template id="ddi" v-slot="timeData">
                        <span class="item">{{ timeData.days }}</span> :
                        <span class="item">{{ timeData.hours }}</span> :
                        <span class="item">{{ timeData.minutes }}</span> :
                        <span class="item">{{ timeData.seconds }}</span>
                    </template>
                </van-count-down>
    <p class="kankan_i" @click="go"><van-icon name="arrow-left" /></p>
   </div>
   </div>
  </div>
</template>
<script>


import Product from '../../services/services'
const _product = new Product()
export default {
  name: 'kanjia_kanjia',
  data() {
    return {
      list:[],
       time: 30 * 60 * 60 * 1000,
       showaaa:false
    }
  },
  computed: {
    clickitem(){
      return this.$store.state.kankanlis
    },
   kankan_shop() {
      return this.$store.state.kankan_shop
    },
    kanjia_shopaa() {
      return this.$store.state.kanjia_shopaa
    }
  },
  created() {
    let token=this.$store.state.token
    let id=this.$store.state.order_id
    this.$store.state.order_ida=this.$store.state.kanjialista.filter((item)=>{
          return  item.goodsId==id
    })
    // console.log(this.$store.state.order_ida)
    let ida=this.$store.state.order_ida[0].id
  // console.log(ida)
     _product.kankan_shop(ida,token).then(res => {
       this.$store.state.kankan_shop= res.data.data
       console.log(res)
     })

    //  console.log(this.$store.state.kankanlis)

  },
  methods: {
    go(){
      this.$router.go(-1)
    },
    kanjiaa(){
      this.showaaa=true
      let str={
        token:this.$store.state.token,
        kjid:this.$store.state.order_ida[0].id,
        joinerUser: this.$store.state.kankan_shop.uid
      }
      console.log(str)
       _product.kankan_shopa(str).then(res => {
      this.$store.state.kanjia_shopaa=res.data.data
       console.log(res)
     })
    }
   
  },
  
} 
</script>
<style>

</style>

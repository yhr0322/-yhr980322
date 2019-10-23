<template>
  <div>
  <div class="title">
<ul class="title_ula">
<li>首页</li>
<li>·</li>
<li>手机</li>
<li>·</li>
<li>“足迹系列”手感膜</li>
<li>·</li>
<li>官方配件</li>
<li>·</li>
<li>周边产品</li>
<li>·</li>
<li>第三方配件</li>
<li>·</li>
<li>全部商品</li>
<li>·</li>
<li>服务</li>
</ul>
<ul class="title_ulb">
<li>综合排序</li>
<li>·</li>
<li>销量排序</li>
<li>·</li>
<li>价格由低到高</li>
<li>·</li>
<li>价格由高到低</li>
</ul>
</div>
<div class="detail" v-for="(item,index) in detail">
<ul class="detail_ul">
<li v-for="(itema,indexa) in item.ali_images" @click="change_img(indexa,itema)"><img :src="itema" alt=""></li>
</ul>
<img :src="item.ali_image" alt="" class="img1" ref="ref">
<div class="detail_data">
<ul>
<li class="det_li1">{{item.title}}</li>
<li class="det_li2"><span>{{item.sub_title}}</span>{{item.price}}￥<span></span></li><hr>
<li class="det_li3">颜色:
<span v-for='(itemb,indexb) in item.sku_list' @click="changeimg(itemb)"></span>
</li>
<li class="det_li4">数量:
<button @click="detail_add">+</button> 
<span>{{ detail_num }}</span>
<button @click="detail_jian">-</button>
</li>
<hr>
<li class="det_li5"><button @click="addcar_list(item)">加入购物车</button><button>现在购买</button></li>
</ul>
</div>
</div>
</div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'detail',
  data () {
    return {
     
    }
  },
  computed: {
    detail(){
      return this.$store.state.detail
    },
     detail_num(){
      return this.$store.state.detail_num
    },
  },
  created() {
      let id=this.$route.params.id
     axios.get("../static/json/goods_detail.json/").then((res) => {
      
      this.$store.state.detail=res.data.filter((item,index)=>{
        if(item.sku_id==id){
          return item
        }
      })
    })
  },
  methods: {
    changeimg(itemb){
      this.$store.commit("changeimg",itemb)
    },
    change_img(i,itema){
       this.$refs.ref[0].src=itema
    },
    detail_add(){
      this.$store.commit("detail_add")
    },
     detail_jian(){
      this.$store.commit("detail_jian")
    },
    addcar_list(item){
      this.$store.commit("addcar_list",item)
    }
  },
  
}
</script>


</style>

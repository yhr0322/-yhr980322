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
<div class="list_shop">
<p>商品详情</p>
<ul v-for="(item,index) in list" @mouseover="over(index)"  @mouseout="out(index)">
<li><img :src="item.sku_info[0].ali_image" alt="" ref="ref"></li>
<li style="font-size:15px;font-weight:900;">{{item.name}}</li>
<li>{{item.shop_info.spu_sub_title}}</li>
<li>
<ol v-for="(itema,indexa) in item.sku_info">
<li @click="changecolor(index,itema.ali_image)">{{itema.spec_json[0].show_name}}</li>
</ol>
</li>
<li class="isshow" style="color:red;font-size:18px;font-weight:900;display:block ;">{{item.price}}￥</li>
<li class="show" style="display:none">
<router-link :to="'/detail/'+item.sku_info[0].sku_id" tag="button" >进入详情</router-link>
<button @click="add(item,$event)">添加购物车</button>
</li>
</ul>
<div  id="ball"><img src="../assets/car.png" alt=""></div>
</div>
<router-view/>
</div>
</template>
<script>
import axios from "axios"
  export default {
    components:{
  }, data() {
      return {
       
      }
    },
  computed:{
list(){
  return this.$store.state.list
}
  },
    methods: {
      add(item,$event){
      //  console.log($event)
         var $ball = document.getElementById('ball');
  
       // console.log($event.pageX,$event.pageY)
        $ball.style.top = $event.pageY+'px';
        $ball.style.left = $event.pageX+'px';
        $ball.style.transition = 'left 0s, top 0s';
        setTimeout(()=>{
            $ball.style.top = '23px';
            $ball.style.left = '908px';
            $ball.style.transition = 'left 1s ease-out, top 1s ease-in';
        }, 20)
       this.$store.commit("add",item)
      },
      //动态改变对应颜色得图片路径
     changecolor(i,a){
      this.$refs.ref[i].src=a
     },
     //鼠标得移入事件 添加按钮显示
     over(index){
      let show = document.getElementsByClassName("show")[index]
       let isshow = document.getElementsByClassName("isshow")[index]
      show.style.display="block"
      isshow.style.display="none"
     },
     //鼠标得移入事件 添加按钮隐藏
     out(index){
      let show = document.getElementsByClassName("show")[index]
       let isshow = document.getElementsByClassName("isshow")[index]
      show.style.display="none"
      isshow.style.display="block"
     }
    },
  }
</script>
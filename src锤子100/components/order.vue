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
</div>
<div class="user_all">
<div class="user_user">
<img src="../assets/untitled.png" alt="">
<p><router-link to="/user" tag="span">收获地址</router-link></p>
<p style="background:#6086e7">我的订单</p>
</div>
<div class="user_new">
<div class="top">
<span>订单信息</span>
</div>
<table v-for="(item,index) in order_list">
<thead>
<th style="width:430px;">{{item.order_data}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 订单号：{{item.order_num}}</th>
<th style="width:60px;">单价</th>
<th style="width:50px;">数量</th>
<th style="width:70px;">商品操作</th>
<th style="width:50px;">小计</th>
<th style="width:70px;">查看详情></th>
</thead>
<tbody>
<tr v-for="(itema,indexa) in item.list">
<td style="width:430px;display:flex;algin-items:center;" >
 <img :src="itema.sku_info[0].ali_image" alt="" style="width:60px;height:60px;">
        <span style="line-height:60px;">{{itema.name}} / {{itema.sku_info[0].spec_json[0].show_name}}</span>
</td>
<td style="width:60px;">{{itema.price}}</td>
<td style="width:50px;">{{itema.product_info.is_insurance}}</td>
<td style="width:70px;"><button @click="del_order(index)">X</button></td>
<td style="width:50px;">{{itema.price*itema.product_info.is_insurance}}</td>
<td style="width:70px;"><p v-show="item.show_ok">已完成</p> <router-link to="/last" tag="span"><button v-show="!item.show_ok">未完成</button></router-link></td>
 
</tr>
<tr>
<td style="width:430px;"></td>
<td style="width:60px;"></td>
<td style="width:50px;"></td>
<td style="width:70px;">应付总额：</td>
<td style="width:50px;">￥{{item.price}}</td>
<td style="width:70px;"></td>
</tr>
</tbody>
</table>
</div>
</div>
  </div>
</template>

<script>
export default {
  name: 'order',
  data () {
    return {
   
    }
  },
  computed: {
    order_list(){
      return this.$store.state.order_list
    },
    price(){
      return this.$store.state.price+8
    },
    order_num(){
      return this.$store.state.order_num
    },
    order_data(){
      return this.$store.state.order_data
    },
    show_ok(){
      return this.$store.state.show_ok
    }
  },
  methods: {
    del_order(index){
      this.$store.commit("del_order",index)
    }
  },
}
</script>


</style>

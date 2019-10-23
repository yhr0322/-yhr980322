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
<div class="last_top">
<p class="p11">支付订单</p>
<ul>
<li class="last_li1">提交订单成功</li>
<li>请在24小时内完成支付，超时订单将自动取消。</li>
<li>我们将在你完成的72小时内发货。</li>
</ul>
<div class="last_button">
    <span class="span1">应付金额：</span>
    <span class="span2">￥{{price}}</span>
    <router-link to="/order" tag="span"><button @click="alert_ok(order_num)">现在支付</button></router-link>
    </div>
</div>
<ul class="last_list">
<li>
<h4>订单编号</h4>
<p>{{order_num}}</p>
</li>
<li v-for="(item,index) in address_end">
<h4>收货地址信息</h4>
<p>姓名：{{item.name}}</p>
<p>联系电话：{{item.phone}}</p>
<p>详细地址：{{item.value1}} {{item.value2}} {{item.value3}} {{item.detail_address}}</p>
</li>
<li>
<h4>发票信息</h4>
<p>发票类型：电子发票</p>
<p>发票抬头：个人</p>
<p>发票内容：购买商品明细</p>
</li>
</ul>
<el-table
      :data="end_list"
      style="width: 900px">
      <el-table-column
        label="商品信息"
        width="570">
        <template slot-scope="scope">
       <img :src="scope.row.sku_info[0].ali_image" alt="" style="width:60px;height:60px;">
        <span>{{scope.row.name}} / {{scope.row.sku_info[0].spec_json[0].show_name}}</span>
          </template>
      </el-table-column>
      <el-table-column
        prop="price"
        label="单价"
        width="110">
      </el-table-column>
      <el-table-column
        label="数量"
        width="110">
        <template slot-scope="scope">
        <span>{{scope.row.product_info.is_insurance}}</span>
         </template>
      </el-table-column>
      <el-table-column
        label="小计"
        width="110">
          <template slot-scope="scope">
        {{scope.row.product_info.is_insurance*scope.row.price}}
         </template>
      </el-table-column>
    </el-table>
    <div style="margin-left:50px;" class="end_price">
    <p>商品总计：<span>￥{{price-8}}</span></p>
    <p>运费：<span>+￥ 8.00</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'last',
  data () {
    return {
   
    }
  },
  computed: {
    price(){
       return this.$store.state.price+8
    },
    address_end(){
        return this.$store.state.address_end
    },
    end_list(){
      return this.$store.state.end_list
    },
    order_num(){
      return this.$store.state.order_num
    }
  },
  methods: {
    alert_ok(order_num){
      this.$store.commit("alert_ok",order_num)
    }
  },
}
</script>


</style>

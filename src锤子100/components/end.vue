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
<div class="end_new">
<p class="p11">收货信息</p>
<ul>
<li class="end_ulli1" v-for="(item,index) in address_list">
<p class="p1">{{item.name}} <input type="checkbox" v-model="item.checked" @change="change_check(index)"></p>
<p class="p2">{{item.phone}}</p>
<p class="p2">{{item.value1}} {{item.value2}} {{item.value3}}</p>
<p class="p2">{{item.detail_address}}</p>
</li>
<li class="end_ulli2">添加使用新地址</li>
</ul>
</div>
<div class="end_fapiao">
<p class="p11">发票信息</p>
<ul>
<li>发票类型：电子发票</li>
<li>发票抬头：个人/单位</li>
<li>发票内容：购买商品明细</li><hr>
<li class="fapiao_li">电子发票是税务局认可的有效首付款凭证，电子发票打印后可以用于企业报销</li>
</ul>
</div>
<div class="end_car">
<p class="p11">购物信息</p>
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
    <div class="end_price">
    <p>商品总计：<span>￥{{price}}</span></p>
    <p>运费：<span>+￥ 8.00</span></p>
    </div>
    <div class="end_button">
    <span class="span1">应付金额：</span>
    <span class="span2">￥{{price}}</span>
    <router-link to="/last" tag="span"><button @click="submit">提交订单</button></router-link>
    </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'end',
  data () {
    return {
   
    }
  },
  computed: {
    address_list(){
     return this.$store.state.address_list
    },
    end_list(){
      return this.$store.state.end_list
    },
    price(){
      return this.$store.state.price+8
    }
  },
  methods: {
    change_check(i){
      this.$store.commit("change_checked",i)
    },
    submit(){
       this.$store.commit("submit")
    }
  },
}
</script>


</style>

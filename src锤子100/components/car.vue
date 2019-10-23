<template>
  <div>
   <p class="car_title">购物清单</p>
    <el-table
      :data="carlist"
      style="width: 900px">
      <el-table-column
        label="商品信息"
        width="580">
        <template slot-scope="scope">
        <input type="checkbox" @change="changeaa" v-model="scope.row.sku_info[0].direct_to_cart">
       <img :src="scope.row.sku_info[0].ali_image" alt="" style="width:60px;height:60px;">
        <span>{{scope.row.name}} / {{scope.row.sku_info[0].spec_json[0].show_name}}</span>
          </template>
      </el-table-column>
      <el-table-column
        prop="price"
        label="单价"
        width="80">
      </el-table-column>
      <el-table-column
        label="数量"
        width="80">
        <template slot-scope="scope">
        <button @click="add(scope.row)">+</button>
        <span>{{scope.row.product_info.is_insurance}}</span>
        <button @click="jian(scope.row,scope.$index)">-</button>
         </template>
      </el-table-column>
      <el-table-column
        label="小计"
        width="80">
          <template slot-scope="scope">
        {{scope.row.product_info.is_insurance*scope.row.price}}
         </template>
      </el-table-column>
      <el-table-column
       width="80"
        label="操作">
         <template slot-scope="scope">
        <button @click="del(scope.$index)">X</button>
          </template>
      </el-table-column>
    </el-table>
    <div class="car_footer">
    <ul>
    <li class="car_li1">
     <p>
     <span style="font-weight:900;">
     <input type="checkbox" @change="change" v-model="checked.checked">全选</span>
      </p> 
      </li>
    <li class="car_li2">
    <p style="font-weight:900;">已经选中{{number*1}}件商品</p>
    <p style="color:gray">共计{{numbers*1}}件商品</p>
    </li>
    <li class="car_li3">
    <p style="font-weight:900;">应付总额：￥{{price}}</p>
    <p style="color:gray">应付总额不含运费</p>
    </li>
    <li class="car_li4" @click="add_endlist"><router-link to="/end" tag="button">现在结算</router-link></li>
    </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'car',
  data () {
    return {
  
    }
  }
  ,computed:{
    carlist(){
      return this.$store.state.carlist
    },
    checked(){
      return this.$store.state.checked
    },
    numbers(){
      return this.$store.getters.numbers
    },
    number(){
      return this.$store.getters.number
    },
    price(){
      return this.$store.getters.price
    }
  },
  methods: {
    add(item,index){
      this.$store.commit("add",item)
    },
     jian(item,index){
      this.$store.commit("jian",{item,index})
    },
    del(index){
      this.$store.commit("del",index)
    },
    change(){
      this.$store.commit("change")
    },
     changeaa(){
      this.$store.commit("changeaa")
    },
    add_endlist(){
     this.$store.commit("add_endlist")
    }
  },
}
</script>

<style lang="sass">
  
</style>


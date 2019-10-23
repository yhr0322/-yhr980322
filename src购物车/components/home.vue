<template>
<div>
<p>商品列表信息</p>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="id" label="id" width="180"></el-table-column>
    <el-table-column prop="name" label="名称" width="180"> </el-table-column>
    <el-table-column prop="price" label="价格"> </el-table-column> 
    <el-table-column prop="number" label="数量"> </el-table-column> 
    <el-table-column label="操作"> 
       <template slot-scope="scope">
        <el-button v-show="scope.row.number===0"  type="success" @click="handleEdit(scope.row)">添加购物车</el-button>
        <el-button v-show="scope.row.number>0" type="success" size="mini"  @click="handleEdit(scope.row)">+</el-button>
        <el-button v-show="scope.row.number>0" type="success" size="mini"  @click="handleJian(scope.row,scope.$index)">-</el-button>
       </template>
    </el-table-column> 
  </el-table>
  <alist></alist>
</div>
</template>
<script>
import alist from "./child"
  export default {
    components:{
   alist
   
  },
  created() {
     this.$store.commit("create")
  },
    computed:{
tableData(){
  return this.$store.state.tableData
}
    },
    data() {
      return {
      }
    },
    methods: {
      handleEdit(item){
       this.$store.commit("handleEdit",item)
      },
      handleJian(item,index){
         this.$store.commit("handleJian",item,index)
         
      }
    },
  }
</script>
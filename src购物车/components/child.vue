<template>
<div>

<p>购物车信息</p>
   <el-table :data="list" border style="width: 100%">
    <el-table-column label="选中"> 
       <template slot-scope="scope">
        <el-checkbox @change="changeshow" v-model="scope.row.checked"></el-checkbox>
       </template>
    </el-table-column> 
    <el-table-column prop="id" label="id" width="180"></el-table-column>
    <el-table-column prop="name" label="名称" width="180"> </el-table-column>
    <el-table-column prop="price" label="价格"> </el-table-column> 
    <el-table-column prop="number" label="数量"> </el-table-column> 
    <el-table-column label="总价">
       <template slot-scope="scope">
       {{scope.row.number*scope.row.price}}
        </template>
    </el-table-column> 
    <el-table-column label="操作"> 
       <template slot-scope="scope">
        <el-button type="danger"  icon="el-icon-delete" circle @click="del(scope.$index,scope.row)"></el-button>
        <el-button type="success" size="mini" @click="handleEdit(scope.row)">+</el-button>
        <el-button type="success" size="mini" @click="handleJian(scope.row,scope.$index)">-</el-button>
       </template>
    </el-table-column> 
  </el-table>
  <template>
  <el-checkbox @change="change" v-model="checked.checked">全选</el-checkbox>
</template>
  <span>总数：{{num}}</span>
  <span>总价：{{num2}}</span> 
  <el-button type="danger" @click="clear">清空购物车</el-button>
  <el-button type="danger" @click="deletea">选中删除</el-button>
  </div>
</template>
<script>

  export default {
    data() {
      return {
      }
    },
    created() {
      
    },
     computed:{
list(){
  return this.$store.state.list
},
num(){
  return this.$store.getters.num
},
num2(){
   return this.$store.getters.price
},
checked(){
  return this.$store.state.aaa
  
}

  },

   methods: {
     changeshow(){
       this.$store.commit("changeshow")
     },
     change(){
       this.$store.commit("change")
     },
      handleEdit(item){
       this.$store.commit("handleEdit",item)
      },
      handleJian(item,index){
         this.$store.commit("handleJian",item,index)
      },
      del(index,item){
        this.$store.commit("del",index,item)
      },
      clear(){
        this.$store.commit("clear")
      },
      deletea(){
         this.$store.commit("deletea")
      }
    },
  }
</script>
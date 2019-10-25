import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
   // list: [],//首页轮播图数据
    kanjialist: [],//首页砍价商品的数据
    scrolllist: [], //首页专题滑动商品的数据
    shop_list: [],//首页商品数据
    shopa_list: [], //首页商品数据中的四条
    // signing_list:[],//路由跳转签到页面的数据
    bbbb_list: [],//分类请求回来的数据存放
    bbbb_lista: [],//分类里边的一级分类
    bbbb_listb: [],//分类里边的二级分类
    login_phone:'',//登录成功时用户名
    f_det_det_str: [],//具体到某一条的详情页的数据
     car_num:1,//footer_car小购物车的数量
  },
  mutations: {
    //购物车弹出框内数量的增加
    foot_add (state) { 
   state.car_num++
    },
    //购物车弹出框内数量的减少
    foot_jian (state) {
      if (state.car_num>1) {
         state.car_num--
      } else {
        alert("已经是最少了！！！")
      }
     
    },
    
        sub (state, phone) {
state.login_phone=phone
    },
    filter_list (state, item) {
      let itemb = item.type + 2
      state.bbbb_listb = state.bbbb_list.filter((itema) => {
        if (itemb == itema.type) {
          return itema
        }
      })
    },
    filter_all (state) {
      state.bbbb_listb = state.bbbb_list
    }
  },
  getters: {
  }
})
const app = new Vue({
  store,
  created () {

    //首页砍价的商品数据请求
     axios.get("https://api.it120.cc/small4/shop/goods/kanjia/list").then((res) => {
       store.state.kanjialist = res.data.data.goodsMap
       console.log(store.state.kanjialist)
      })
    //首页专题滑动商品的数据
     axios.get("https://api.it120.cc/small4/cms/news/list").then((res) => {
       store.state.scrolllist = res.data.data
       
       
     })
    //首页下方商品列表的数据
     axios.get("https://api.it120.cc/small4/shop/goods/list").then((res) => {
       store.state.shop_list = res.data.data
       store.state.shopa_list = store.state.shop_list.splice(0, 4)
     })
   
  },
})
export default store
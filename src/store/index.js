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
     
  },
  mutations: {
    filter_list (state, item) {
   
      let itemb = item.type + 2
      console.log(itemb)
      state.bbbb_listb = state.bbbb_list.filter((itema) => {
        if (itemb == itema.type) {
          
        }
      })
    }
  },
  getters: {
    
  }
})
const app = new Vue({
  store,
  created () {
    //首页轮播图的axios数据请求
    // axios.get("https://api.it120.cc/small4/banner/list").then((res) => {
    //   store.state.list = res.data.data
    // })

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
    //路由跳转到签到页面的数据
    // axios.get("https://api.it120.cc/small4/score/sign/rules").then((res) => {
    //   store.state.signing_list = res.data
     
    //   console.log(store.state.signing_list)
    // })
  },
})
export default store
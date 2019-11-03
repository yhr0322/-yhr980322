import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
   // list: [],//首页轮播图数据
    kanjialist: [],//首页砍价商品的数据
    kanjialista:[],//砍价商品得另一个数组
    scrolllist: [], //首页专题滑动商品的数据
    shop_list: [],//首页商品数据
    shopa_list: [], //首页商品数据中的四条
    // signing_list:[],//路由跳转签到页面的数据
    bbbb_list: [],//分类请求回来的数据存放
    bbbb_lista: [],//分类里边的一级分类
    bbbb_listb: [],//分类里边的二级分类
    login_phone:'',//登录成功时用户名
    f_det_det_str: [],//具体到某一条的详情页的数据
    car_num: 1,//footer_car小购物车的数量
    size: '',//商品类型
    size_id:'',//商品尺寸id
    color: '',//商品颜色
    color_id:'',//商品颜色id
    car_list: [],//购物车数据列表
    car_checked: {
        car_all_check:true,//购物车的全选
    },
    car_all_price: 0,//购物车总价
    car_all_num: 0, //购物车总数量
     ////新建地址的属性
    addressab: {
      checked:true,//地址的状态
      user: '',//收货人
      phone: '',//收件人联系方式
      address_one: "请选择",//三级联动第一级
      address_two: "请选择", //三级联动第二级
      address_three: "", //三级联动第三级
      address_det: "",//收货详细地址
      number_add:'',//邮政编码
      check: true,//备选状态   
       id: '', //一级联动的id
      ida: '', //二级联动的id
    },
    addressa_list_user: [],//添加收货地址
    addressa_list_list: [], //显示收货地址
    address_defa: {
       address_def:[],//默认地址
    },
    order_deta:[],//订单的详情数据
   
    token: '',//用户的token
    add_id: "",//地址的id
    list_order: [],//创建订单页面的数组
    car_listaaa: [],//接收订单时需要的参数
     order_listaaaa:[],//下单后接受购物车的数据
    str_add:'',//颜色以及尺码只有一个的时候
    str_name: '',//用id代替尺码
    propertyChildIds: '',//订单时数据拼接
    order_num: '',//订单号
    order_listnum_a: [],//订单列表数据
    order_state: [],//订单的返回的变更状态数组
    num_num: [],//订单详情id
    order_id: '',//砍价详情id
    order_ida: '', //砍价详情id真
     kankanlis:[],//砍价发起页面得数据
    value: {
      input_value:'',//分类页input绑定数值
    },
    kankan_shop: [],//发起砍价后接受数据
    kanjia_shopaa:[],//砍一刀得数组
    order_statea: '',//具体到某一个订单时的状态
    order_allprice:'',//订单总额
  // bbbb:{},//评价时上一个页面传递得参数
  },
  mutations: {
    ///点击待付款时的订单
    // jump_no (state, str) {
     
    // },
    //点击下单时  生成的数据 以及。。。。
    add_obj (state) {
      state.order_listaaaa = state.car_list.filter((item) => {
        return item.checked==true
      })
        
    },
    //立即下单时，做的添加
    add_order (state, f_det_det_str) {
      state.order_listaaaa=[]
      state.order_listaaaa.push({

        color_id: state.color_id,
          size_id: state.size_id,
          checked: true,
          size: state.size,
          color: state.color,
          car_num: state.car_num,
          propertyChildIds: state.propertyChildIds,
          f_det_det_str: f_det_det_str
      })
       state.order_allprice = 0,
         state.order_listaaaa.map((item) => {
          
             state.order_allprice += Number(item.car_num) * Number(item.f_det_det_str.basicInfo.minPrice)
          
         })
      
    },
    //点击添加购物车数据是事件
     add_car(state, f_det_det_str) {
       
       let indexa = state.car_list.findIndex((item) => {
           console.log(item.size_id,state.size_id)
         return item.size_id==state.size_id
       })
       let indexb = state.car_list.findIndex((item) => {
          console.log(item.size_id, state.size_id)
         return item.color_id == state.color_id
       })
       let obja={
         color_id: state.color_id,
         size_id: state.size_id,
         checked: true,
         size: state.size,
         color: state.color,
         car_num: state.car_num,
         propertyChildIds: state.propertyChildIds,
         f_det_det_str: f_det_det_str
       }
    console.log(indexa,indexb)
      if (indexa == -1 || indexb == -1) {
        state.car_list.push(obja)
      
      } else {

        state.car_list[indexa].car_num += obja.car_num
       }
       state.car_num=1
    console.log(state.car_list)
 
      let objb = {
        goodsId: f_det_det_str.basicInfo.id,
        logisticsType: 0,
        number: state.car_num,
        propertyChildIds: state.propertyChildIds,
      }
      
      state.car_listaaa.push(objb)
      state.car_listaaa=state.car_listaaa.map((item, index) => {
         return item
       })
    

    },
    //地址的默认选中状态改变
    change_check (state, indexa) {
      state.addressa_list_list.map((item, index) => {
         item.isDefault=false
       })
      state.addressa_list_list[indexa].isDefault=true
     
    },
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
    //商品状态的改变影响
    change_statea (state) {
      let arr = state.car_list.every((i) => {
        return i.checked==true
      })
     state.car_checked.car_all_check = arr
    },
    //全选input改变时 带来的影响
    change_all (state) {
      if (state.car_checked.car_all_check == true) {
        state.car_list.map((item) => {
          item.checked=true
        })
      } else {
         state.car_list.map((item) => {
           item.checked = false
         })
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
    car_all_price (state) {
      state.car_all_price = 0,
        state.car_list.map((item) => {
          if (item.checked == true) {
             state.car_all_price += Number(item.car_num) *Number(item.f_det_det_str.basicInfo.minPrice) 
          }
        })
      return state.car_all_price
    },
    car_all_num(state) {
      state.car_all_num = 0,
        state.car_list.map((item) => {
            state.car_all_num += item.car_num
        })
      return state.car_all_num
    },
    bbbb_listb (state) {
       console.log(state.value.input_value)
      return state.bbbb_listb.filter((item) => {
        return item.name.includes(state.value.input_value)
      })
     
    }
  }
})
const app = new Vue({
  store,
  created () {

    //首页砍价的商品数据请求
     axios.get("https://api.it120.cc/small4/shop/goods/kanjia/list").then((res) => {
       store.state.kanjialist = res.data.data.goodsMap
       store.state.kanjialista = res.data.data.result
        console.log(res)
      
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
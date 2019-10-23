import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
import storea from "./indexa.js"
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    list: [],//商品列表
    detail: storea.fetch("detail"), //详情数据
    carlist: storea.fetch("carlist"), //购物车列表
    address_list: storea.fetch("address_list"), //添加收货地址得数组
    number: 0,//选中数量
    numbers: 0, //总数量
    price: 0, //应付得总价格
    checked: {
      checked: true,//定义全选按钮得状态
    },
    address: [],//storea.fetch("address"), //获取地址列表
    false_id: 1,//通过假id对下方的id进行赋值
    value: {
    address_id: 1, //给每一个收货地址添加一个唯一的id
    value1: '',//获取第一个下拉框得值
    value2: '', //获取第二个下拉框得值
      value3: '', //获取第三个下拉框得值
      name: '',//收货地址名字
      phone: "",//收货手机号
      detail_address: "",//收货详细地址
      checked:true,//是否设置为默认地址
    },
    end_list: storea.fetch("end_list"), //结算时做运算的数组
    addressone: [],//storea.fetch("addressone"), //获取二级菜单得列表
    addresstwo: [], //storea.fetch("addresstwo"), //获取三级菜单得列表
    show: {
       showa:false,//新建地址列表得显示隐藏
    },
    address_end: storea.fetch("address_end"), //在订单页面显示的默认地址
    order_list: storea.fetch("order_list"), //提交订单时订单数组
    order_num: 0,//提交订单时的订单编号
    order_data: '',//我的提交订单时间
    // show_ok: {
    //   show_ok: false,//是否支付，结算状态已完成还是未完成
    // },
    detail_num: 1,//详情页面商品数量
  },
  mutations: {
    //做购物车商品得添加
    add (state, item) {
      let indexa = state.carlist.findIndex((itema) => {
        return itema.id == item.id
      })
      if (indexa == -1) {
        item.product_info.is_insurance++
        state.carlist.push(item)
      } else {
        item.product_info.is_insurance++
      }
    storea.save("carlist", state.carlist)
    },
    //做购物车商品得减少
    jian (state, data) {
      if (data.item.product_info.is_insurance > 1) {
        data.item.product_info.is_insurance--
      } else {
        data.item.product_info.is_insurance--
        state.carlist.map((itema, index) => {
          if (itema.product_info.is_insurance == 0) {
            state.carlist.splice(index, 1)
          }
        })
      }
      storea.save("carlist", state.carlist)
    },
    //购物车得删除
    del (state, index) {
      state.carlist.splice(index, 1)
      storea.save("carlist", state.carlist)
    },
    //购物车得全选
    change (state) {
      state.carlist.map((item, index) => {
        if (state.checked.checked == true) {
          item.sku_info[0].direct_to_cart = true
        } else {
          item.sku_info[0].direct_to_cart = false
        }
      })
      storea.save("carlist", state.carlist)
    },
    //选中决定全选状态
    changeaa (state) {
      let arr = state.carlist.every((i) => {
        return i.sku_info[0].direct_to_cart == true
      })
      state.checked.checked = arr
      storea.save("carlist", state.carlist)
    },
    //从此处开始编写详情页得逻辑
    //替换照片
    changeimg (state, itemb) {
      axios.get("../static/json/goods_detail.json/").then((res) => {

        state.detail = res.data.filter((item, index) => {
          if (item.sku_id == itemb.id) {
            return item
          }
        })
      })
      storea.save("detail", state.detail)
    },
    //改变用户地址二级联动
    changev1 (state) {
      state.address.filter((item) => {
        if (item.area_name == state.value.value1) {
          state.addressone=item.city_list
        }
      })
       //storea.save("addressone", state.addressone)
    },
    //改变用户地址三级联动
    changev2 (state) {
      state.addressone.filter((item) => {
        if (item.area_name == state.value.value2) {
          state.addresstwo=item.county_list
        }
      })
     //  storea.save("addresstwo", state.addresstwo)
    },
    //添加新的地址并添加后清空input
    add_new(state, value) {
      let indexa = state.address_list.findIndex((itema) => {
        // console.log(itema.address_id)
        // console.log(value.address_id)
        return itema.address_id == value.address_id
      })
      //console.log(indexa)
      let phone = value.phone
     
      if (value.name != "") {
        if ((/^1[3456789]\d{9}$/.test(phone))) {
          if (indexa == -1) {
        state.false_id++
        state.value.address_id = state.false_id
      
        state.address_list.push(state.value)
     
      } else {
      
        state.address_list[indexa] = state.value
        }
         state.show.showa = false
        } else {
          alert("手机号输入有误，请重新输入！！！")
        }
         
      } else {
        alert("用户名不可以为空！！！")
      }
     

       if (state.value.checked == true) {
         state.address_list.map((item, index) => {
           item.checked = false
         })
       }
      state.value = {
        address_id:1,
        value1: '', //获取第一个下拉框得值
        value2: '', //获取第二个下拉框得值
        value3: '', //获取第三个下拉框得值
        name: '', //收货地址名字
        phone: "", //收货手机号
        detail_address: "",//收货详细地址
        checked: false, //是否设置为默认地址
         
      }
     
       storea.save("address_list", state.address_list)
    },
    //点击编辑按钮修改当前选中地址（传item）
    address_updata (state, item) {
      state.show.showa = true
      state.value=item
    },
    //改变默认地址的选中状态
    change_checked (state, i) {
      state.address_list.map((item, index) => {
        item.checked = false
      })
      state.address_list[i].checked = true
      storea.save("address_list", state.address_list)
    },
    //点击新建地址按钮 做input显示
    showa (state) {
      state.show.showa = true
    },
    //点击删除做删除收货地址
    user_del (state, index) {
      state.address_list.splice(index, 1)
      storea.save("address_list", state.address_list)
    },
    //购物车结算按钮点击改变结算页面商品
    add_endlist (state) {
      state.end_list = state.carlist.filter((item) => {
        if (item.sku_info[0].direct_to_cart == true) {
          return item
        }
      })
      storea.save("end_list", state.end_list)
    },
    //在点击提交订单时，将默认地址过滤出来 到下一个页面使用
    submit (state, index) {
      state.address_end = state.address_list.filter((item) => {
        if (item.checked == true) {
          return item
        }
      })
      //提交订单时改变购物车内现有的数据
      state.carlist = state.carlist.filter((item) => {
         if (item.sku_info[0].direct_to_cart == false) {
           return item
         }
      })
       //定义时间戳
      let data = new Date()
    //  state.order_list = state.end_list
      state.order_num = data.getTime()
      state.order_data = data.toLocaleDateString()
    //   state.end_list.map((item, index) => {
    //   state.order_list.push(item)
    //  })
       state.order_list.push({
         order_data: state.order_data,
         order_num: state.order_num,
         price: state.price,
         list: state.end_list,
         show_ok:false
    })
    
      
      storea.save("carlist", state.carlist)
      storea.save("address_end", state.address_end)
      storea.save("order_list", state.order_list)
    },
    //点击支付按钮提示支付并改变订单状态
    alert_ok(state, order_num) {
     
      // state.show_ok.show_ok = true
      state.order_list.map((item, index) => {
        if (item.order_num ==order_num) {
           item.show_ok=true
          // console.log(item.order_num)
          //  console.log(order_num)
        }
      })
       storea.save("order_list", state.order_list)
     
      alert("已经支付成功！")
    },
    //点击删除按钮 删除订单
    del_order (state, index) {
      state.order_list.splice(index, 1)
      storea.save("order_list", state.order_list)
    },
    //详情页添加数量按钮
    detail_add (state) {
      state.detail_num++
    },
    //详情页减少数量按钮
    detail_jian (state) {
      if (state.detail_num > 1) {
        state.detail_num--
      } else {
        alert("已经减到最小了")
      }
    },
    //详情页添加购物车
    addcar_list (state, item) {
      
      
    }
    },
    getters: {
      numbers (state) {
        state.numbers = 0
        state.carlist.map((item, index) => {
          state.numbers += item.product_info.is_insurance
        })
        return state.numbers
      },
      number (state) {
        state.number = 0
        state.carlist.map((item, index) => {
          if (item.sku_info[0].direct_to_cart == true) {
            state.number += item.product_info.is_insurance
          }

        })
        return state.number
      },
      price (state) {
        state.price = 0
        state.carlist.map((item, index) => {
          if (item.sku_info[0].direct_to_cart == true) {
            state.price += item.product_info.is_insurance * item.price
          }
        })
        return state.price
      }
    
  }
})
const app = new Vue({
  store,
  created () {
     axios.get("../static/json/goods_list.json").then((res) => {
      store.state.list = res.data
     })
   
  },
})
export default store
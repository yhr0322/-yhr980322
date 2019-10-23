import Vue from "vue"
import Vuex from "vuex"
import storea from "./indexa.js"
import ddddd from "./indexb.js"
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
     tableData: [{
    id: 1,
    name: "鱼香肉丝",
    price: 12,
    number: 0,
    checked:true
  }, {
    id: 2,
    name: "宫保鸡丁",
    price: 14,
         number: 0,
    checked: true
  }, {
    id: 3,
    name: "土豆丝",
    price: 10,
         number: 0,
    checked: true
  }, {
    id: 4,
    name: "米饭",
    price: 2,
         number: 0,
    checked: true
      }],
    list: storea.fetch("hcm"),
    num: 0,
    num2: 0,
    aaa: {
      checked:true
    },
    listchild:[]
  },
  mutations: {
    create (state) {
      let alist = storea.fetch("hcm")
      let blist = storea.fetch("hcma")
      if (blist && alist) {
         state.list = alist || []
       state.tableData=blist
      }
     
    },
    changeshow (state) {
      let arr = state.list.every((i) => {
        return i.checked == true
      })
      state.aaa.checked=arr
    },
    change(state) {
      console.log(state.aaa.checked)
      state.list.map((item, index) => {
        if (state.aaa.checked == true) {
           item.checked=true
        }
        else {
           item.checked = false
        }
    })
    },
    handleEdit (state, item) {
      let index = state.list.findIndex((itema) => {
        return itema.id == item.id
      })
      if (index == -1) {
        item.number++
        state.list.push(item)
      } else {
       item.number++
      }
      let idnum = item.id
      let numnum = item.number
      state.tableData.map((item, index) => {
        if (item.id == idnum) {
          item.number=numnum
        }
      })
      state.list.map((item, index) => {
        if (item.id == idnum) {
          item.number = numnum
        }
      })
     // ddddd.deepClone(state.list)
      storea.save("hcma", state.tableData)
      storea.save("hcm", state.list)
    },
    handleJian (state, item,index) {
      if (item.number > 1) {
        item.number--
      } else if (item.number == 1) {
        item.number--
        state.list.map((item, index) => {
          if (item.number == 0) {
             state.list.splice(index,1)
          }
        })
      } 
      let idnum = item.id
      let numnum = item.number
      state.tableData.map((item, index) => {
        if (item.id == idnum) {
          item.number = numnum
        }
      })
      state.list.map((item, index) => {
        if (item.id == idnum) {
          item.number = numnum
        }
      })
      //ddddd.deepClone(state.list)
       storea.save("hcma", state.tableData)
       storea.save("hcm", state.list)
    },
    del (state, index, item) {
      state.list[index].number=0
      state.list.splice(index, 1)
      //ddddd.deepClone(state.list)
       storea.save("hcma", state.tableData)
       storea.save("hcm", state.list)
    },
    clear (state) {
      state.list = []
      state.tableData.map((item, index) => {
        item.number=0
      })
      //ddddd.deepClone(state.list)
       storea.save("hcma", state.tableData)
       storea.save("hcm", state.list)
    },
    deletea(state) {
      state.listchild = state.list.filter((item) => {
        return item.checked==false
      })
      state.list = state.listchild
      //ddddd.deepClone(state.list)
       storea.save("hcma", state.tableData)
       storea.save("hcm", state.list)
    }
  },
  getters: {
    num (state) {
      state.num=0
      state.list.map((item, index) => {
        if (item.checked == true) {
           state.num+=item.number
        }
      })
      return state.num
    },
    price(state) {
      state.num2 = 0
      state.list.map((item, index) => {
        if (item.checked == true) {
           state.num2 += item.number*item.price
        }
      })
      return state.num2
    }
  }
})
export default store
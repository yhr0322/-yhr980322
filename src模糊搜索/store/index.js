import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
   list:[]
  },
  mutations: {
    
  },
  getters: {
    
  }
})
const app = new Vue({
  store,
  created() {
    axios.get("/api/home/index613/ver/V689/type/4/key/水光针/").then((res) => {
     store.state.list=res.data.data.list
     
      console.log(res.data.data.list)
      console.log(store.state.list)
   })
    

  },
})
export default store
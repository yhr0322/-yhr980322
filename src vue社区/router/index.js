import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Work from "@/views/work"
import User from "@/views/user"
import Updata from "@/views/updata"
import Login from "@/views/login"



Vue.use(Router)
export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
     
      component: Home
    },
    {
      path: '/login',

      component:Login
    },
    {
      path: "/work/:id?",
      component:Work
    },
    {
      path: "/user/:name",
      component: User
    },
    {
      path: "/updata",
      component: Updata
    }
  ]
})

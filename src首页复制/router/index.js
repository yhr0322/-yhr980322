import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Fen from '@/views/fen'
import User from '@/views/user'
import Car from '@/views/car'
import Signin from "@/views/signin"
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
     
      component: Home
    }, 
    {
      path: '/signin',

      component: Signin
    },
    {
      path: '/fen',

      component: Fen
    },
    {
      path: '/user',

      component:User
    },
    {
      path: '/car',

      component: Car
    },
      
  ]
})

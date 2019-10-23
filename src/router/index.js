import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/home'
import Fen from '@/views/fenlei/fen'
import User from '@/views/home/user'
import Car from '@/views/home/car'
import Kanjiab from '@/views/home/Kanjiab'
import Kanjiadetail from '@/views/home/Kanjiadetail'
import Exchange from '@/views/home/exchange'
import Special from '@/views/home/Special'
import Signin from "@/views/home/signin"
import Shopp from "@/views/home/shopp"
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
     
      component: Home
    }, 
    {
      path: '/Special',

      component: Special
    },
    {
      path: '/shopp',

      component: Shopp
    },
     {
       path: '/exchange',

       component: Exchange
     },
    {
      path: '/kanjiab',

      component:Kanjiab
    },
    {
      path: '/kanjiadetail/:id?',

      component: Kanjiadetail
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

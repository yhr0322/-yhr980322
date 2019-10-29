import Vue from 'vue'
import Router from 'vue-router'


import Car from '@/views/car/car'
import Order from '@/views/car/order'
import Order_ok from '@/views/car/order_ok'
import Order_yes from '@/views/car/order_yes'
import Order_detail from '@/views/car/order_detail'


import Home from '@/views/home/home'
import Kanjiab from '@/views/home/Kanjiab'
import Kanjiadetail from '@/views/home/Kanjiadetail'
import Exchange from '@/views/home/exchange'
import Special_det from '@/views/home/special_det'
import Special from '@/views/home/Special'
import Signin from "@/views/home/signin"
import Shopp from "@/views/home/shopp"


import Fen from '@/views/fenlei/fen'
import Fen_detail from "@/views/fenlei/fen_detail"
import F_det_det from "@/views/fenlei/f_det_det"


import User from '@/views/user/user'
import Login from '@/views/user/login'
import Register from '@/views/user/register'
import Update_pass from '@/views/user/update_pass'
import Addressa from '@/views/user/addressa'
import Address_create from '@/views/user/address_create'
import Address_det_up from '@/views/user/address_det_up'
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
     
      component: Home
    },
     {
       path: '/order_detail',

       component: Order_detail
     },
    {
      path: '/order',

      component: Order
    },
    {
      path: '/order_ok',

      component: Order_ok
    },
    {
      path: '/order_yes',

      component: Order_yes
    },
    {
      path: '/address_det_up',

      component: Address_det_up
    },
     {
       path: '/addressa',

       component: Addressa
    },
     {
       path: '/address_create',

       component: Address_create
     },
    {
      path: '/update_pass',

      component: Update_pass
    },
    {
      path: '/special_det/:id?',

      component: Special_det
    },
    {
      path: '/register',

      component: Register
    },
    {
      path: '/f_det_det/:id?',

      component: F_det_det
    },
     {
       path: '/login',

       component: Login
     },
    {
      path: '/fen_detail/:id?',

      component: Fen_detail
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

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Car from '@/components/car'
import User from '@/components/user'
import Last from '@/components/last'
import Order from '@/components/order'
import Detail from '@/components/detail'
import End from '@/components/end'
import Work from "@/views/work"
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
     
      component: Home
    }, 
    {
      path: '/order',

      component: Order
    },
    {
      path: '/last',

      component: Last
    },
    {
      path: '/user',

      component: User
    },
    {
      path: '/end',

      component: End
    },
      {
          path: 'work',

          component: Work
    },
      {
        path: '/detail/:id?',

        component:Detail
      },
      {
        path: '/car',

        component: Car
      },
  ]
})

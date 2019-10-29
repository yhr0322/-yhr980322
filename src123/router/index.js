import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
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
          path: 'work',

          component: Work
        },
  ]
})

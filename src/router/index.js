import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Index from '@/views/Index'
import Layout from '@/views/layoutmain'

Vue.use(Router)
export default new Router({
  mode: "history",
  base: "/",
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/index',
      iconCls: 'fa fa-dashboard', // 图标样式class
      //name: routeNmae.home,
      component: Layout,
      alone: true
    }
    
  ]
})

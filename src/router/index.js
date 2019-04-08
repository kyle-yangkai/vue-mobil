import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Test1 from '@/components/test1'
import home from '@/components/home'
import discovery from '@/components/discovery'
import mine from '@/components/mine'
import orders from '@/components/orders'
import homepage from '@/components/homepage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/homepage',
      component: home,
      children: [
        {
          path: '/homepage',
          name: 'homepage',
          component: homepage
        },
        {
          path: '/discovery',
          name: 'discovery',
          component: discovery
        },
        {
          path: '/mine',
          name: 'mine',
          component: mine
        },
        {
          path: '/orders',
          name: 'orders',
          component: orders
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/test1',
      name: 'Test1',
      component: Test1,
      meta:{
        needLogin: true
      }
    }
  ]
})

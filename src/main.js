// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import Mint from 'mint-ui'
Vue.use(Mint)
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false

router.beforeEach((to,from,next) => {
  if(to.matched.some( m => m.meta.needLogin)){
    // 对路由进行验证
    if(store.state.isLogin === true) {// 已经登陆       
      next()   // 正常跳转到你设置好的页面     
    } else {// 未登录则跳转到登陆界面，query:{ Rurl: to.fullPath}表示把当前路由信息传递过去方便登录后跳转回来；
      next({path:'/login',query:{ rurl: to.fullPath} })
  　} 
  } else {
  　next() 
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
window.onload = function(){
  setStandard();
}

// 动态设置font-size以及缩放比例
var setStandard = ()=>{
  let scale = 1 / devicePixelRatio;
  document.querySelector('meta[name="viewport"]').setAttribute('content','width=device-width, initial-scale='+ scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
  let _html =document.getElementsByTagName("html")[0];
  let fs = _html.getBoundingClientRect().width/10;
  _html.style.fontSize = fs + "px";
}

window.onresize = function (){
  setStandard();
}


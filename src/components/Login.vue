<template>
    <div>
      <input type="text" name="username" id="username" v-model="username">
      <input type="text" name="password" id="password" v-model="password">
      <button @click="login">登录</button>
      <button @click="$store.commit('Logout')">注销</button>
      <p>当前登录状态为{{isLogin}}</p>
    </div>
</template>
<script>
import store from '@/store'
import {mapState} from 'vuex'
import Vue from 'vue'//引入vue
import axios from 'axios'//引入axios
Vue.prototype.$axios = axios;//把axios挂载到vue上
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  computed: mapState(['isLogin']),
  methods: {
    login: function () {
      let username = this.username
      let password = this.password
      let that = this
      if(username === '' || password === ''){
        alert('账号或密码不能为空！')
      } else{
        that.$axios.get('/static/data.json', {
          username,
          password
        })
        .then(function (response) {
          console.log(response.data)
          let users = response.data.users
          let isUser = false
          for(let i=0;i<users.length;i++){
            if(username === users[i].username && password === users[i].password){
              isUser = true
            }
          }
          if(isUser){ 
            console.log(1)
            that.$store.commit('Login')
            that.$router.push({path:that.$route.query.rurl})
          } else {
            alert('请输入正确的用户名和密码！！！')
            that.username = ''
            that.password = ''
          }
        })
        .catch(function (error) {
          console.log(error)
        })
      }
    }
  },
  store
}
</script>
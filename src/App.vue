<template>
  <div id="app">
    <router-view class=""/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body{
  margin: 0;
  padding: 0;
  /* height: 100vh; */
  /* width: 100vw; */
  background: #f5f5f5;
}
p,div {
  margin: 0;
  padding: 0;
}
*::-webkit-scrollbar { 
  width: 0 !important 
}
* {
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
}
img {
  width: 100%;
  height: 100%;
}
a {
  text-decoration: none;
  outline: none;
}
body {
  font-size: 0.32rem;
}
#app {
  font-family: 'Helvetica Neue',Tahoma,Arial,PingFangSC-Regular,'Hiragino Sans GB','Microsoft Yahei',sans-serif;
  line-height: 1.2;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}


/* indicator 样式复写 */
.mint-swipe-indicator {
  width: 0.24rem;
  height: 0.04rem;
  border-radius: 0;
}
.mint-swipe-indicator.is-active {
    background: #00a6ff;
}

/* 复写底部标签栏样式 */
.mint-tabbar.is-fixed {
  height: 1.3333rem;
  z-index: 999;
}
.mint-tabbar .mint-tab-item-icon {
  margin-top: 0.12rem;
  height: 0.5333rem;
  width: 0.5333rem;
}
.mint-tabbar .mint-tab-item-label {
 font-size: 0.266667rem;
 line-height: 1.2;
}
.mint-tabbar > .mint-tab-item,.mint-tabbar > .mint-tab-item.is-selected {
  background: #fff;
}

/* 复写navbar切换组件样式 */
.mint-navbar {
  display: flex;
  flex-wrap: nowrap;
}
.mint-navbar>div {
  width: 3.333333333rem;
}
.mint-navbar .mint-tab-item {
  display: inline-block;
  font-weight: 700;
  color: #999;
  padding: 0;
}
.mint-navbar .mint-tab-item.is-selected {
  color:#333;
  border-bottom:0.05333rem solid #2395ff
}
.mint-navbar .mint-tab-item .mint-tab-item-label {
  font-size: 0.4rem;
  line-height: 1.06667rem;
}
</style>

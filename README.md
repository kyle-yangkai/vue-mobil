# vue-mobil

> A Vue.js project for mobil

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 仿写饿了么移动端

### 1. 应用的技术栈

* vue全家桶（vue + vuex + vue-cli + vue-router）
* axios
* mint-ui
* html
* css
* es5/es6

### 2. 需要解决的问题

#### 1. 公共

* 尺寸基准font-size的确认 —— 使用
* resize使用
* position新属性sticky
* background-image新属性
* 加减商品可以分离成一个组件

#### 2. 首页

* 地址选择插件
* 地址选择时的动画效果
* 轮播插件
    —— 在mint-ui中swipe基础上加以改进，达到理想的效果
    —— 其复写的css样式需要在全局style中，否则不会生效
* 需要登录才能查看的页面（使用vuex管理）
* 下拉加载
* 商家简介组件化
* svg
* 动画效果
* css 三角形，圆形
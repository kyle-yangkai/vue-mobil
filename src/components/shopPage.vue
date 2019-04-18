<template>
    <div>
        <div class="shopInfBox">
            <div class="backImg">
                <div class="img"></div>
                <span @click="$router.go(-1)"></span>
            </div>
            <div class="logoImg">

            </div>
            <div class="shopInf">
                <div class="shopInf-1">曼玲粥店（莲前西路店）</div>
                <div class="shopInf-2">
                    <span>评价4.7</span>
                    <span>月售2103单</span>
                    <span>蜂鸟转送约22分钟</span>
                </div>
                <div class="shopInf-3">
                    <div>
                        <span><small>共 ￥</small>17 <small>店铺</small></span>
                        <span><small>领取</small></span>
                    </div>
                </div>
                <div class="shopInf-4">
                    <p>
                        <span class="saleIcon">满减</span>
                        <span>满25减15，满49减18，满79减21</span>
                    </p>
                    <span>5个优惠</span>
                </div>
                <div class="shopInf-5">公告：欢迎光临，用餐高峰期请提前下单，谢谢！</div>
            </div>
        </div>
        
        <!-- tab-navbar -->
        <mt-navbar v-model="selected" class="navbar">
            <div>
                <mt-tab-item id="1">点餐</mt-tab-item>
            </div>
            <div>
                <mt-tab-item id="2">评价</mt-tab-item>
            </div>
            <div>
                <mt-tab-item id="3">商家</mt-tab-item>
            </div>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <order />
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <mt-cell v-for="n in 4" :key="n" :title="'测试 ' + n" />
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <mt-cell v-for="n in 6" :key="n" :title="'选项 ' + n" />
            </mt-tab-container-item>
        </mt-tab-container>

        <!-- 底部购物车 -->
            <footer>
                <!-- 购物车图标及简要信息 -->
                <div class="shopCartBox">
                    <div class="emptyShadow" v-show="!(foodNum>0)"></div>
                    <div class="shopCart empty">
                        <span v-show="foodNum>0">{{foodNum}}</span>
                    </div>
                    <div class="shopCartBox-middle">
                        <span v-if="!(foodNum>0)">未选购商品</span>
                        <span class="middle-1" v-if="foodNum>0">￥8.0</span>
                        <span class="middle-2">另需配送费3.1元</span>
                    </div>
                    <router-link to="" class="send">
                        <span @click="addFood">去结算</span>
                    </router-link>
                </div>
                <!-- 购物车内详细信息 -->
                <div class="shopContentBox">

                </div>
            </footer>

        <!-- 下侧弹出内容 -->
        <mt-popup
        v-model="popupVisible"
        position="bottom">
            123
        </mt-popup>
    </div>
</template>

<script>
import order from './templates/shopPage/order'
export default {
    name: 'shopPage',
    data() {
        return {
            popupVisible: false,
            selected: '1',
            foodNum: 0,
            sendStandard: 0
        }
    },
  components: {
      order
  },
  methods: {
    button: function() {
        this.$data.popupVisible = !this.$data.popupVisible
    },
    // 添加商品
    addFood: function () {
        this.$data.foodNum++;
        console.log(this.foodNum)
        var _shopCart =document.getElementsByClassName("shopCart")
        _shopCart[0].classList.remove("empty")
        _shopCart[0].classList.add("addFood")
        setTimeout(function(){
            _shopCart[0].classList.remove("addFood")
        },500)
    }
  }
}
</script>

<style scope>
.shopInfBox {
    position: relative;
    background: #fff;
}
.backImg {
    height: 2.66667rem;
    position: relative;
    background-image: url("https://fuss10.elemecdn.com/f/b9/be9c57bc2457721211700239f3c90png.png?imageMogr/format/webp/thumbnail/750x/");
}
.backImg>.img {
    height: 100%;
    background-image: linear-gradient(0deg,hsla(0,0%,100%,0),rgba(0,0,0,.5));
}
.backImg>span {
    position: absolute;
    top: 0.15rem;
    left: 0.3rem;
    transform: rotate(45deg);
    width:0.32rem;
    height: 0.32rem;
    display: block;
    margin: 0.13333rem 0 0 0.13333rem;
    border-bottom: 0.05333rem solid #fff;
    border-left: 0.05333rem solid #fff;
}
.logoImg {
    width: 2rem;
    height:2rem;
    position: absolute;
    background: #444;
    /* border: 0.1rem solid #000; */
    top:1.1rem;
    left:4rem;
}
.shopInf {
    position: relative;
    display: flex;
    flex-direction:column;
    overflow: hidden;
    text-align: center;
    align-items: center;
    padding: 0.8rem 0 0;
    font-size: 0.29333rem;
    color: #666;
}
.shopInf-1 {
    position: relative;
    width: 7.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 0.546667rem;
    font-weight: 700;
    color: #333;
}
.shopInf-1::after {
    content: "";
    border-style: solid;
    border-width: .146667rem 0 .146667rem .173333rem;
    border-color: transparent transparent transparent rgba(0,0,0,.67);
    position: absolute;
    right: 0rem;
    top: .213333rem;
}
.shopInf-2 {
    width: 7.2rem;
    white-space: nowrap;
    height: 0.32rem;
    margin-top: 0.17333rem;
    line-height: 0.32rem;
}
.shopInf-2>span {
    padding-right: 0.1rem;
}
.shopInf-2>span:last-child {
    padding-right: 0;
}
.shopInf-3 {
    margin: 0.21333rem auto 0;
    width: 8rem;
    display: flex;
    justify-content: center;
    font-size: 0.42667rem;
}
.shopInf-3>div {
    position: relative;
    align-items: center;
    display: flex;
    justify-content: space-between;
    position: relative;
    padding-left: .2rem;
    height: .64rem;
    line-height: 0.64rem;
    width: 3.84rem;
    background: #fff4f4;
    color: #5c1603;
    font-weight: 700;
}
.shopInf-3>div::before {
    content: '';
    position: absolute;
    right: .933333rem;
    bottom:0;
    width: .133333rem;
    height: .066667rem;
    background: #fff;
    border-radius: .133333rem .133333rem 0 0;
}
.shopInf-3>div::after {
    content: '';
    position: absolute;
    right: .933333rem;
    top:0;
    width: .133333rem;
    height: .066667rem;
    background: #fff;
    border-radius: 0 0 .133333rem .133333rem;
}
.shopInf-3>div>span:first-child {
    display: block;
    flex: 1;
}
.shopInf-3>div>span:last-child {
    display: block;
    width: 0.93333rem;
}
.shopInf-3>div small {
    font-weight: 400;
    font-size: 0.29333rem;
}
.shopInf-4 {
    width: 8rem;
    margin: 0.32rem auto 0;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
}
.shopInf-4>p {
    display: block;
    text-align: left;
    display: flex;
    flex-flow: nowrap;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #333;
}
.shopInf-4 .saleIcon {
    padding: 0 0.12rem;
    margin-right: 0.16rem;
    font-size: 0.24rem;
    display: inline-block;
    height: 0.34667rem;
    background: #f07373;
    color: #fff;
}
.shopInf-4>span {
    padding-right: 0.29333rem;
    width:1.62667rem;
    flex:none;
    position: relative;
    text-align: right;
    color: #999;
}
.shopInf-4>span::after {
    content: "";
    display: block;
    border-style: solid;
    border-width: .106667rem .093333rem 0;
    border-width: 1.066667vw .933333vw 0;
    border-color: #999 transparent transparent;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 0;
}
.shopInf-5 {
    width:8rem;
    margin: 0.22667rem auto 0.26667rem;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #999;
}
.navbar {
    position: sticky;
    position: -webkit-sticky; 
    top: 0;
    z-index: 999;
}
.shopCartBox {
    position: fixed;
    display: flex;
    justify-content: flex-end;
    align-items: center;  
    bottom: 0;
    background: #3d3d3f;
    width: 100%;
    color:#fff;
    height: 1.28rem;
    z-index: 9999;
    /* background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNTggNTgiPjxkZWZzPjxmaWx0ZXIgaWQ9ImEiIHdpZHRoPSIyMDAlIiBoZWlnaHQ9IjIwMCUiIHg9Ii01MCUiIHk9Ii01MCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+PGZlT2Zmc2V0IGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz48ZmVHYXVzc2lhbkJsdXIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIiBzdGREZXZpYXRpb249IjEuNSIvPjxmZUNvbG9yTWF0cml4IGluPSJzaGFkb3dCbHVyT3V0ZXIxIiByZXN1bHQ9InNoYWRvd01hdHJpeE91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA4IDAiLz48ZmVNZXJnZT48ZmVNZXJnZU5vZGUgaW49InNoYWRvd01hdHJpeE91dGVyMSIvPjxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyIvPjwvZmVNZXJnZT48L2ZpbHRlcj48cGF0aCBpZD0iYiIgZD0iTTcuNjE0IDQuMDUxYy0xLjA2Ni4wODYtMS40NTItLjM5OC0xLjc1Mi0xLjU4NEM1LjU2MiAxLjI4LjMzIDUuODguMzMgNS44OGwzLjcxIDE5LjQ3NmMwIC4xNDgtMS41NiA3LjUxNS0xLjU2IDcuNTE1LS40ODkgMi4xOS4yOTIgNC4yNyAzLjU2IDQuMzIgMCAwIDM2LjkxNy4wMTcgMzYuOTIuMDQ3IDEuOTc5LS4wMTIgMi45ODEtLjk5NSAzLjAxMy0zLjAzOS4wMy0yLjA0My0xLjA0NS0yLjk3OC0yLjk4Ny0yLjk5M0w4LjgzIDMxLjE5MnMuODYtMy44NjUgMS4wNzctMy44NjVjMCAwLTUuNzg4LjEyMiAzMi4wNjUtMS45NTYuNjA2LS4wMzMgMi4wMTgtLjc2NCAyLjI5OC0xLjg0OCAxLjExMy00LjMxNyA0LjAwOC0xMy4yNiA0LjQ1OC0xNS42NC45MzItNC45MjUgMi4wNjEtOC41NTgtNC4yOC03LjQwNSAwIDAtMzUuNzY4IDMuNDg3LTM2LjgzMyAzLjU3M3oiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWx0ZXI9InVybCgjYSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMikiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMDM4IDcuODA4KSI+PG1hc2sgaWQ9ImMiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2IiLz48L21hc2s+PHVzZSBmaWxsPSIjRkZGIiB4bGluazpocmVmPSIjYiIvPjxwYXRoIGZpbGw9IiMyMDczQzEiIGQ9Ik01My45NjIgNy43NzRsLTUuNzAxIDE5LjMwNS00MC43OCAxLjU3NHoiIG1hc2s9InVybCgjYykiIG9wYWNpdHk9Ii4xIi8+PC9nPjxwYXRoIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjYiIGQ9Ik05LjM3NCAxOC43MjJTNy44NjggMTEuMjgzIDcuMzIzIDguNzFDNi43NzggNi4xMzYgNS44NiA1LjMzIDMuOTc4IDQuNTIgMi4wOTYgMy43MTMuMzY3IDIuMjg2LjM2NyAyLjI4NiIvPjxjaXJjbGUgY3g9IjQ2IiBjeT0iNTEiIHI9IjQiIGZpbGw9IiNGRkYiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjUxIiByPSI0IiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==) 50% no-repeat; */
}
.shopCart, .emptyShadow {
    position: absolute;
    z-index: 1;
    left: 0.32rem;
    bottom: 0.2rem;
    height: 1.33333rem;
    width: 1.33333rem;
    border-radius:100%;
    background: #3190e8; 
    border: 0.13333rem solid #444;
    box-shadow: 0 -0.08rem 0.053333rem 0 rgba(0,0,0,.1);
    box-sizing: border-box;
}
.shopCart>span {
    position:absolute;
    right: -0.12rem;
    top: -0.13333rem;
    display: inline-block;
    height:0.25rem;
    line-height: 0.25rem;
    background-image: linear-gradient(-90deg,#ff7416,#ff3c15 98%);
    border-radius: 0.32rem;
    color: #fff;
    padding: 0.05333rem 0.13333rem;
    font-size: 0.26667rem;
}
.addFood {
    animation:  0.5s kkk ease-in-out;
}
@keyframes kkk {
    0% {
        height: 1.33333rem;
        width: 1.33333rem;
        left: 0.32rem;
        bottom: 0.2rem;
        }
    25% {
        height: 1.2rem;
        width: 1.2rem;
        left: 0.386667rem;
        bottom: 0.266667rem;
        }
    50% {
        height: 1.5rem;
        width: 1.5rem;
        left: 0.23665rem;
        bottom: 0.11665rem;
        }
    75% {
        height: 1.2rem;
        width: 1.2rem;
        left: 0.386667rem;
        bottom: 0.266667rem;
        }
    100% {
        height: 1.33333rem;
        width: 1.33333rem;
        left: 0.32rem;
        bottom: 0.2rem;
        }
}
.empty {
    background: #222; 
}
.emptyShadow {
    z-index: 444;
    background: rgba(68,68,68,0.7);
}
.shopCart::before {
    content: "";
    margin: 25% auto 0;
    display: block;
    width: 50%;
    height: 50%;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNTggNTgiPjxkZWZzPjxmaWx0ZXIgaWQ9ImEiIHdpZHRoPSIyMDAlIiBoZWlnaHQ9IjIwMCUiIHg9Ii01MCUiIHk9Ii01MCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+PGZlT2Zmc2V0IGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz48ZmVHYXVzc2lhbkJsdXIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIiBzdGREZXZpYXRpb249IjEuNSIvPjxmZUNvbG9yTWF0cml4IGluPSJzaGFkb3dCbHVyT3V0ZXIxIiByZXN1bHQ9InNoYWRvd01hdHJpeE91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA4IDAiLz48ZmVNZXJnZT48ZmVNZXJnZU5vZGUgaW49InNoYWRvd01hdHJpeE91dGVyMSIvPjxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyIvPjwvZmVNZXJnZT48L2ZpbHRlcj48cGF0aCBpZD0iYiIgZD0iTTcuNjE0IDQuMDUxYy0xLjA2Ni4wODYtMS40NTItLjM5OC0xLjc1Mi0xLjU4NEM1LjU2MiAxLjI4LjMzIDUuODguMzMgNS44OGwzLjcxIDE5LjQ3NmMwIC4xNDgtMS41NiA3LjUxNS0xLjU2IDcuNTE1LS40ODkgMi4xOS4yOTIgNC4yNyAzLjU2IDQuMzIgMCAwIDM2LjkxNy4wMTcgMzYuOTIuMDQ3IDEuOTc5LS4wMTIgMi45ODEtLjk5NSAzLjAxMy0zLjAzOS4wMy0yLjA0My0xLjA0NS0yLjk3OC0yLjk4Ny0yLjk5M0w4LjgzIDMxLjE5MnMuODYtMy44NjUgMS4wNzctMy44NjVjMCAwLTUuNzg4LjEyMiAzMi4wNjUtMS45NTYuNjA2LS4wMzMgMi4wMTgtLjc2NCAyLjI5OC0xLjg0OCAxLjExMy00LjMxNyA0LjAwOC0xMy4yNiA0LjQ1OC0xNS42NC45MzItNC45MjUgMi4wNjEtOC41NTgtNC4yOC03LjQwNSAwIDAtMzUuNzY4IDMuNDg3LTM2LjgzMyAzLjU3M3oiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWx0ZXI9InVybCgjYSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMikiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMDM4IDcuODA4KSI+PG1hc2sgaWQ9ImMiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2IiLz48L21hc2s+PHVzZSBmaWxsPSIjRkZGIiB4bGluazpocmVmPSIjYiIvPjxwYXRoIGZpbGw9IiMyMDczQzEiIGQ9Ik01My45NjIgNy43NzRsLTUuNzAxIDE5LjMwNS00MC43OCAxLjU3NHoiIG1hc2s9InVybCgjYykiIG9wYWNpdHk9Ii4xIi8+PC9nPjxwYXRoIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjYiIGQ9Ik05LjM3NCAxOC43MjJTNy44NjggMTEuMjgzIDcuMzIzIDguNzFDNi43NzggNi4xMzYgNS44NiA1LjMzIDMuOTc4IDQuNTIgMi4wOTYgMy43MTMuMzY3IDIuMjg2LjM2NyAyLjI4NiIvPjxjaXJjbGUgY3g9IjQ2IiBjeT0iNTEiIHI9IjQiIGZpbGw9IiNGRkYiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjUxIiByPSI0IiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==) 50% no-repeat;
}
.shopCartBox-middle {
    /* padding-left: 2.106667rem; */
    display: flex;
    flex-direction: column;
    width: 5.1rem;
    text-align: left;
    line-height: normal;
    color: #999;
    font-size: 0.336rem;
    font-weight: 400;
}
.middle-1 {
    color:#fff;
    font-size: 0.48rem;
}
.middle-2{
    font-size: 0.26667rem;
}
.send {
    display: block;
    height: 100%;
    width: 2.8rem;
    background: #38ca73;
    color: #fff;
    text-align: center;
    font-size: 0.4rem;
    font-weight: 700;
    line-height: 1.28rem;
}
.mint-tab-container {
    margin-bottom: 1.81333rem;
}
</style>
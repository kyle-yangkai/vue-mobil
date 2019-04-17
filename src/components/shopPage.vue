<template>
    <div>
        <div>
            商家基本信息
            <button @click="button">点击</button>
        </div>
        

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
                    <div :class="(foodNum>0)?'shopCart':'shopCart empty'">
                        <span v-show="foodNum>0">{{foodNum}}</span>
                    </div>
                    <div class="shopCartBox-middle">
                        <span :class="(foodNum>0)?'middle-1':''">￥8.0</span>
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
        // _shopCart[0].classList.remove("empty")
        _shopCart[0].classList.add("addFood")
        setTimeout(function(){
            _shopCart[0].classList.remove("addFood")
        },500)
    }
  }
}
</script>

<style scope>
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
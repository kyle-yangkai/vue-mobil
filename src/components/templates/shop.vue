<template>
    <div class="shopBox">
        <div class="shopContent">
            <div class="shopLogo">
                <img :src="shopData.url" >
            </div>
            <div class="shopDetail">
                <section class="shopDetail-1">
                    <h3 class="shopName"><span v-if="shopData.isBig" class="showBig">品牌</span><span>{{shopData.name}}</span></h3>
                    <div class="shopDetail-1-1">
                        <span class="addIcon" v-if="shopData.isAdd">广告</span>
                        <span class="unlike">···</span>
                    </div>
                </section>
                <section class="shopDetail-2">
                    <div class="shopDetail-2-1">
                        <div class="rateStar">
                            <img class="grayStar" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+">
                            <div ref="star" class="yellowStarBox">
                                <img class="yellowStar" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeDI9IjEwMCUiIHkyPSI1MCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZERTAwIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGQjAwMCIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+" >
                            </div>
                        </div>
                        <span class="rate">{{shopData.rate}}</span>
                        <span class="saleNumber">月售{{shopData.saleNumber}}单</span>
                    </div>
                    <div class="shopDetail-2-2" v-if="shopData.send"><span>蜂鸟专送</span></div>
                </section>
                <section class="shopDetail-3">
                    <div class="shopDetail-3-1">
                        <span>￥{{shopData.sendStandard}}起送</span>
                        <span class="beforeHost">{{shopData.sendCost}}</span>
                    </div>
                    <div class="shopDetail-3-2">
                        <span>{{shopData.distance}}</span>
                        <span class="beforeHost">{{shopData.minute}}分钟</span>
                    </div>
                </section>
            </div>
        </div>
        <div class="saleInf">
            <div class="saleInf-1">
                <span>包子粥店</span>
                <span>米粉面馆</span>
                <span>品质联盟</span>
                <span class="koubei"><img src="https://fuss10.elemecdn.com/a/c1/24c767ffa7fd296d3e2d6f01798c6png.png?imageMogr/format/webp/thumbnail/!20x20r/gravity/Center/crop/20x20/"><span>口碑人气好店</span></span>
            </div>
            <div class="saleInf-2"></div>
            <div class="saleInf-3">
                <div class="saleInf3-1">
                    <span v-for="(item,index) in shopData.saleInf" :key="index" v-show="saleShowNum>index"><span class="saleIcon" ref="colorChange">{{item.saleIcon}}</span><span>{{item.saleDetail}}</span></span>
                </div>
                <div class="saleInf3-2" @click="toggleSaleInf" v-if=" saleNum > defaultSaleNum">
                    <span>{{saleNum}}个活动</span>
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjOTk5IiBkPSJNNC41NzcgNS40MjNjLjc5Ljc3IDIuMDczLjc2NyAyLjg1NyAwbDQuMTItNC4wMjZDMTIuMzQ1LjYyNSAxMi4wOSAwIDEwLjk4NSAwSDEuMDI3Qy0uMDc3IDAtLjMzLjYzLjQ1NyAxLjM5N2w0LjEyIDQuMDI2eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+" >
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'shop',
    props:["shopData"],
    data () {
        return {
            saleNum: 0,
            showMore: false,
            saleShowNum: 2,
            defaultSaleNum: 2   // 初始最大显示的促销信息数量
        }
    },
    mounted: function () {
        // 根据评分计算宽度显示星星
        // console.log(this.shopData.rate)
        // console.log(this.$refs.star)
        let _width = this.shopData.rate/5.0*1.49333
        // console.log(_width)
        this.$refs.star.style.width = _width + "rem"

        // 活动icon的颜色更改
        if(this.$refs.colorChange){
            let _colorChange = this.$refs.colorChange
            this.$data.saleNum = _colorChange.length
            for(let i=0;i<_colorChange.length;i++){
                switch(_colorChange[i].innerText){
                    case "减":
                        _colorChange[i].style.background = "#f07373";
                        break;
                    case "折":
                        _colorChange[i].style.background = "#f07373";
                        break;
                    case "换":
                        _colorChange[i].style.background = "#f1884f";
                        break;
                    case "首":
                        _colorChange[i].style.background = "#70bc46";
                        break;
                    case "赠":
                        _colorChange[i].style.background = "#3cc791";
                        break;
                    case "特":
                        _colorChange[i].style.background = "#f1884f";
                        break;
                    default:
                        _colorChange[i].style.background = "#999";
                        break;
                }
            }
        }
    },
    methods: {
        toggleSaleInf: function () {
            if(this.$refs.colorChange){
                let _length = this.$refs.colorChange.length
                this.$data.saleShowNum = (this.$data.saleShowNum === _length)?this.$data.defaultSaleNum:_length
            }
        }
    }
}
</script>
<style scoped>
.shopBox {
    position: relative;
    width: 100%;
    font-size: 0.29333rem;
    padding: 0.4rem 0;
    border-bottom: 0.01333rem solid #eee;
    color: #666;
}
.shopContent {
    padding: 0 0.26667rem;
    display: flex;
    justify-content: flex-start;
}
.shopContent>.shopLogo {
    position: relative;
    width: 1.73333rem;
    height: 1.7333rem;
    border-radius: 0.05333rem;
    border: 0.01333rem solid rgba(0,0,0,0.8);
    flex: none;
    -webkit-flex:none;
}
.shopContent>.shopLogo>img {
    width: 100%;
    height: 100%;
}
.shopContent>.shopDetail {
    padding-left: 0.26667rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items:stretch;
    justify-content:space-between;
    user-select:none;
    overflow: hidden;
}
.shopDetail-1, .shopDetail-2, .shopDetail-3 {
    display: flex;
    justify-content:space-between;
    align-items: center;
    overflow: hidden;
}
.shopDetail-2-1 {
    display: flex;
    justify-content: start;
}
.shopDetail-1>h3{
    display: flex;
    margin: 0;
    padding: 0;
    font-size: 0.4rem;
    font-weight: 700;
    color: #333;
    overflow: hidden;
}
.shopDetail-1>h3>.showBig{
    margin-right: 0.13333rem;
    padding: 0.02667rem 0.06667rem;
    font-size: 0.29333rem;
    line-height: normal;
    white-space: nowrap;
    background: #ffec14;
    color: #6f3f15;
    flex: none;
}
.shopDetail-1>h3>span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1;
}
.shopDetail-1-1 {
    display: flex;
}
.shopDetail-1-1>.addIcon {
    display: inline-block;
    /* border: 0.01333rem solid #eee; */
    width: 0.60rem;
    margin-left: 0.26667rem;
    font-size: 0.15rem;
    line-height: 0.4rem;
}
.unlike {
    margin-left: 0.13333rem;
    padding: 0 0.13333rem;
}
.shopDetail-2-1>.rateStar {
    position: relative;
    margin-right: 0.10667rem;
    vertical-align: middle;
}
.rateStar>.grayStar, .rateStar .yellowStar {
    width: 1.49333rem;
    height: 0.26667rem;
    max-width: 1.49333rem;
}
.yellowStarBox {
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
}
.shopDetail-2-1>.rate {
    display: inline-block;
    margin-right: 0.10667rem;
}
.shopDetail-2-2>span{
    background-image: linear-gradient(45deg,#0085ff,#0af);
    background-image: -webkit-linear-gradient(45deg,#0085ff,#0af);
    border-radius:0.04rem; 
    color: #fff;
}
.beforeHost::before {
    content: "|";
    margin: 0 0.08rem;
}
.saleInf {
    padding-left: 2.26667rem;
    display: flex;
    flex-direction: column;
}
.saleInf-1 {
    display: flex;
    justify-content: start;
    margin:  0.26667rem 0.2667rem 0 0;
    flex-wrap: wrap;
}
.saleInf-1>span {
    font-size: 0.26667rem;
    margin:0 0.10667rem 0.13333rem 0;
    padding: 0 0.10667rem;
    border: 0.02667rem solid #ddd;
    display: flex;
}
.saleInf-1>span.koubei {
    border: 0;
    vertical-align:middle;
    color: #e8470b;
}
.koubei>img {
    width: 0.26667rem;
    height: 0.26667rem;
    margin-right: 0.08rem;
    margin-top: 0.04rem;
}
.saleInf-2 {
    display: flex;
    height:  0.26667rem;
    border-bottom: 0.01333rem dotted  #eee;
}
.saleInf-3 {
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    font-size: 0.29333rem;
}
.saleInf3-1 {
    display: flex;
    flex-direction:column;
    padding-right: 0.26667rem;
    overflow: hidden;
    line-height: 0.48rem;
}
.saleInf3-1>span {
    vertical-align: middle;
    overflow: hidden;
    display: flex;
}
.saleInf3-1>span>span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.saleInf3-1>span>.saleIcon{
    height: 0.38rem;
    width: 0.38rem;
    line-height: 0.38rem;
    color: #fff;
    text-align: center;
    margin:0.04rem 0.16rem 0.04rem 0;
    flex:none;
    font-style: inherit;
    border-radius: 0.05rem;
}
.saleInf3-2 {
    padding: 0.08rem 0.26667rem 0 0 ;
    font-size: 0.26667rem;
    color: #999;
    flex: none;
    vertical-align:middle;
}
.saleInf3-2>span {
    padding-right: 0.10667rem;
}
.saleInf3-2>img {
    width: 0.17333rem;
    height: 0.1rem;
    padding-bottom: 0.05rem;
}
</style>

<template>
    <div>
        <p class="title"><strong>热销</strong><span>大家喜欢吃，才叫真好吃(测试超出部分显示省略号)</span></p>
        <div class="foodLi" @click="button">
            <div class="foodImg">
                <img src="https://fuss10.elemecdn.com/a/6f/423867571f556dbac3b489d823c30jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/">
            </div>
            <div class="foodDetial">
                <p class="foodTitle">皮蛋瘦肉粥（曼玲  测试超出部分显示省略号）</p>
                <p>营养成分/每100g:能量(kcal)100，蛋白质(g)4.6,脂肪(g)1.9,碳水化合物(g)16.3,纳(mg)86.9</p>
                <p><span class="saleNum">月售45份</span><span>好评率98%</span></p>
                <p class="forSale"><span><span>6.6折</span></span><span>每单限1份优惠</span><span>剩10份</span></p>
                <p class="priceSpan"><span>9.9</span><span>15</span></p>
                <div  class="addCart"> <img src="@/assets/icon/addCart.png" ></div>
            </div>
        </div>


        <!-- 下侧弹出内容 -->
        <mt-popup
        v-model="popupVisible"
        position="bottom">
            <div class="popupDiv">
                <div class="img">
                    <div @click="button">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 24 24" class="hide"><defs><path id="a" d="M13.132 12l6.47-6.47a.75.75 0 0 0-1.061-1.06l-6.47 6.47-6.47-6.47a.75.75 0 0 0-1.06 1.06L11.01 12l-.072.071.071.071-6.47 6.47a.75.75 0 0 0 1.061 1.06l6.47-6.47 6.47 6.47a.75.75 0 0 0 1.06-1.06l-6.47-6.47.072-.07-.071-.072z"></path></defs> <g fill="none" fill-rule="evenodd"><use fill="#fff" fill-rule="nonzero" xlink:href="#a"></use> <path d="M0 0h24v24H0z"></path></g></svg>
                    </div>
                    <img src="//fuss10.elemecdn.com/a/6f/423867571f556dbac3b489d823c30jpeg.jpeg?imageMogr/format/webp/thumbnail/!375x375r/gravity/Center/crop/375x375/" alt="">
                </div>
                <div class="popupDiv-detai">
                    <p class="popupDiv-detai-title">
                        <span>招牌</span>
                        <span>皮蛋瘦肉粥（曼玲 测试超出部分隐藏的）</span>
                    </p>
                    <p><span class="saleNum">月售542份</span><span>好评率98%</span></p>
                    <p class="priceSpan"><span>16</span> <img src="@/assets/icon/addCart.png" ></p>
                    <p>营养成分/每100g:能量(kcal)100，蛋白质(g)4.6,脂肪(g)1.9,碳水化合物(g)16.3,纳(mg)86.9</p>
                </div>
            </div>
        </mt-popup>
    </div>
</template>

<script>
export default {
    data() {
        return {
            popupVisible: false  //初始化弹出层状态
        }
    },
    methods: {
      button: function() {  //控制弹出层
        this.$data.popupVisible = !this.$data.popupVisible
      }
    },
  components: {

  }
}
</script>

<style scoped>


.title {
    padding: 0.2rem 0.8rem 0.2rem 0;
    margin-left: 0.26667rem;
    text-align: left;
    display: flex;
    align-items: center;
}
.title>strong {
    font-size: 0.32rem;
    color: #666;
    font-weight: 700;
    margin-right: 0.13333rem;
    flex:none;
}
.title>span {
    font-size: 0.26667rem;
    color: #999;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.foodLi {
    margin: 0;
    padding: 0.26667rem 0 0.26667rem 0.26667rem;
    display: flex;
}
.foodLi>.foodImg {
    width: 2.53333rem;
    height: 2.53333rem;
    margin-right: 0.26667rem;
    flex: none;
}
.foodLi>.foodDetial {
    display: flex;
    position: relative;
    flex-direction: column;
    overflow: hidden;
    text-align: left;
    padding-right: 0.4rem;
    padding-bottom: 0.66667rem;
}
.foodDetial>p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    /* flex:1; */
    font-size: 0.26667rem;
    padding-right: 0.26667rem;
    color: #999;
    margin-top: 0.13333rem;
}
.foodDetial>.foodTitle {
    font-weight: 700;
    font-size: 0.4rem;
    color: #333;
    padding-right: 0.4rem;
    margin: 0;
}
.foodDetial>p>.saleNum, .popupDiv-detai .saleNum {
    margin-right: 0.10667rem;
}
.foodDetial>.forSale {
    color: #f07373;
}
.forSale>span:first-child {
    color: #eb6551;
    height: 0.4rem;
    padding: 0 0.08rem;
}
.forSale>span:first-child>span {
    border: .133333vw solid hsla(8,79%,62%,.3);
    border-radius: 0.02667rem;
}
.forSale>span:last-child {
    color: #ff4c0d;
    padding: 0 0.08rem;
    margin-left: 0.08rem;
    border-radius: 0.02667rem;
    height: 0.34667rem;
    line-height: 0.34667rem;
    background: #ff4c0d26;
}
.foodDetial>.priceSpan {
    position: absolute;
    bottom: 0;
    font-size: 0.4rem;
    line-height: 0.42667rem;
    padding-bottom: 0.09333rem;
    color: #ff5339;
    align-items: baseline;
}
.priceSpan>span::before {
    content: "￥";
}

.foodDetial>.priceSpan>span:last-child{
    margin-left: 0.16rem;
    font-size: 0.32rem;
    color: #999;
    text-decoration: line-through;
}
.addCart {
    position: absolute;
    bottom: 0;
    right:0.4rem;
    width: 0.58667rem;
    height: 0.58667rem;
}

/* 弹出层 */
.popupDiv {
    position: relative;
    width: 100vw;
    height: 100%;
}
.popupDiv>.img {
    width:100%;
    position: relative;
}
.img>div {
    width: 0.74667rem;
    height: 0.74667rem;
    border-radius: 50%;
    background: rgba(0,0,0,0.2);
    position: absolute;
    z-index: 2;
    top:0.21333rem;
    right: 0.4rem;
    justify-content: center;
    align-items: center;
    display: flex;
}
.hide {
    height: 0.53333rem;
    width: 0.53333rem;
}
.popupDiv-detai {
    display: flex;
    flex-direction: column;
    padding: 0.4rem 0.4rem 0;
}
.popupDiv-detai>p {
    font-size: 0.29333rem;
    /* line-height: 0.37333rem; */
    color: #666;
    text-align: left;
    margin-bottom: 0.24rem;
    display: flex;
    overflow: hidden;
}
p.popupDiv-detai-title>span:last-child {
    font-size: 0.53333rem;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 7.46667rem;
    color: #333;
}
p.popupDiv-detai-title>span:first-child {
    display: inline-block;
    text-align: center;
    background-image: linear-gradient(135deg,#ffae1b,#f57751);
    font-size: 0.26667rem;
    color: #fff;
    width: 0.64rem;
    height: 0.34667rem;
    line-height: 0.34667rem;
    margin-right: 0.13333rem;
    margin-top: 0.16667rem;
}
.popupDiv-detai>.priceSpan {
   justify-content:space-between;
}
.popupDiv-detai>.priceSpan>span {
    font-size: 0.4rem;
    line-height: 0.426667rem;
    color: #ff5339;

}
.popupDiv-detai>.priceSpan>img {
    width: 0.58667rem;
    height: 0.58667rem;
}
/* 复写弹出层 */
.mint-popup-bottom {
    top: 0;
    margin-bottom: 1.81333rem;
}
</style>

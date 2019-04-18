<template>
    <div>
        <div class="showImg">
            <img src="https://fuss10.elemecdn.com/b/7a/44b10e907d6529948f61f5b32b3adpng.png?imageMogr/format/webp/thumbnail/686x/">
        </div>
        <div class="recommend">
            <div class="recommend-1">
                <p>商家推荐</p>
            </div>
            <div class="recommend-2">
                <recommendedFood />
                <recommendedFood />
                <recommendedFood />
                <recommendedFood />
                <recommendedFood />
                <recommendedFood />
                <recommendedFood />
                <recommendedFood />
                <recommendedFood />
                <recommendedFood />
                <recommendedFood />
                <recommendedFood />
                <recommendedFood />
            </div>
        </div>
        <div class="goodBox">
            <div class="goodBox-left">
                <div style="height:100px">1</div>
                <div style="height:100px">12</div>
                <div style="height:100px">13</div>
                <div style="height:100px">13</div>
                <div style="height:100px">13</div>
                <div style="height:100px">13</div>
                <div style="height:100px">13</div>
                <div style="height:100px">13</div>
                <div style="height:100px">13</div>
                <div style="height:100px">13</div>
                <div style="height:100px">13</div>
                <div style="height:100px">13</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">14</div>
                <div style="height:100px">15</div>
                <div style="height:100px">16</div>
                <div style="height:100px">17</div>
                <div style="height:100px">18</div>
            </div>
            <div class="goodBox-right">
                <menuFood />
            </div>
        </div>
    </div>
</template>

<script>
import menuFood from './menuFood';
import recommendedFood from './recommendedFood';
export default {
    name: 'order',
    data() {
        return {

        }
    },
  components: {
      menuFood,
      recommendedFood
  }
}
</script>

<style scoped>
.showImg {
    background: #fff;
    padding: 0.18667rem 0 0 0;
}
.showImg>img {
    width: 9.14667rem;
    height: 2.34667rem;
    margin: 0 auto;
    border-radius: 0.08rem;
}
.recommend {
    padding-top: 0.42667rem;
    background: #fff;
}
.recommend-1>p {
    margin: 0;
    padding-left: 0.42667rem;
    margin-bottom: 0.26667rem;
    color: #333;
    font-size: 0.42667rem;
    font-weight: 700;
    text-align: left;
}
.recommend-2 {
    overflow-x: scroll;
    display: flex;
}
.recommend-2>div:first-child {
    margin-left: 0.42667rem;
}
.recommendFoodBox {
    height: 3rem;
    width: 3rem;
    margin: 0.1rem;
    background: red;
}
.goodBox {
    display: flex;
    flex-wrap: wrap;
    height:100vh;
    /* background: red;
    padding-bottom: 1rem;
    margin-bottom:1rem  */
}
.goodBox-left {
    width: 2.1rem;
    overflow-y: auto;
    height: 100%;
}
/* .goodBox-left>div {
    display: flex;
    flex-direction: column;
    flex: none;
} */
.goodBox-right {
    width: 7.9rem;
    background: #fff;
    overflow-y: auto;
    height: 100%;
}
/* .goodBox-right>div {
    display: flex;
    flex-direction: column;
    flex: none;
} */
</style>

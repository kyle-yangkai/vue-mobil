<template>
    <div class="box">
        <div class="img">
            <img src="https://fuss10.elemecdn.com/a/96/3f30083ec71cf80b395cf8cb52ce3png.png?imageMogr/format/webp/thumbnail/240x/" >
        </div>
        <p class="title">皮蛋瘦肉粥2份+蒸饺+牛肉饼+虎邦辣酱</p>
        <p class="saleInf">
            <span>月售5</span>
            <span>好评率100%</span>
        </p>
        <p class="add">
            <span>￥60.8</span>
            <img src="@/assets/icon/addCart.png" @click="btn">
        </p>
    </div>
</template>
<script>
export default {
    name:'recommendedFood',
    data() {
        return {
            num:0
        }
    },
    methods: {
        btn: function(){
            console.log(this.$data.num)
            return this.$data.num++
        }
    }
}
</script>
<style scoped>
.box{
    flex: none;
    width: 3.2rem;
    margin-right: .266667rem;
    padding-bottom: .426667rem;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
.img {
    width: 3.2rem;
    height:3.2rem;
    border-radius: 0.08rem;
}
.box>p{
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    text-align: left;
}
.title {
    color: #333;
    font-size: 0.37333rem;
    margin: 0.18667rem 0;
}
.saleInf {
    color: #999;
    font-size: 0.26667rem;
    margin-bottom: 0.18667rem;
}
.add {
    display: flex;
    justify-content: space-between;
    vertical-align: middle;
}
.add>span {
    font-size: 0.48rem;
    display: block;
    color: #ff5339;
}
.add>img {
    width: 0.58667rem;
    height: 0.58667rem;
}
</style>

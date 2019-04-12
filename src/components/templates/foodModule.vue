<template>
    <div class="module">
        <router-link :to="foodModul.router"  class="foodEntry">
            <div>
                <img :src="foodModul.imgUrl" >
            </div>
            <span>{{foodModul.title}}</span>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'foodModul',
    props:["foodModul"],
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.module {
    position:relative;
    width: 2rem;
}
.foodEntry {
    text-decoration: none;
    font-size: 0.32rem;
    color:#666;
    margin-top: 0.29333rem;
    display: flex;
    flex-direction: column;
    width: 100%;
}
.foodEntry>div {
    width: 1.2rem;
    height: 1.2rem;
    margin: 0 auto;
    margin-top: 0.13333rem;
}
</style>

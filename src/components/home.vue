<template>
    <div>
        <router-view />
        <mt-tabbar v-model="selected"  fixed>
          <mt-tab-item id="homepage">
            <img slot="icon" src="">
            首页
          </mt-tab-item>
          <mt-tab-item id="discovery">
            <img slot="icon" src="">
            发现
          </mt-tab-item>
          <mt-tab-item id="orders">
            <img slot="icon" src="">
            订单
          </mt-tab-item>
          <mt-tab-item id="mine">
            <img slot="icon" src="">
            我的
          </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return{
      selected: 'homepage'
    }
  },
  watch: {
    selected(newV, oldV) {
      this.$router.push({
        name: this.selected
      })
    }
  }
}
</script>
<style >

</style>

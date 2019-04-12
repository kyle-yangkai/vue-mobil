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
            selected: '1'
        }
    },
  components: {
      order
  },
  methods: {
      button: function() {
        this.$data.popupVisible = !this.$data.popupVisible
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
</style>

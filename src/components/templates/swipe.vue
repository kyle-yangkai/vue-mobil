<template>
    <div>
        <mt-swipe :auto="time">
          <mt-swipe-item v-for="n in dataObj.n" :key="n"><slot name="n"/></mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {
  props: {
    dataObj: Object
  },
  data () {
    return {
      time: 0
    }
  }
}
</script>

<style>
/* indicator 样式复写 */
.mint-swipe-indicator {
  width: 0.06rem;
  height: 0.01rem;
  border-radius: 0;
}
.mint-swipe-indicator.is-active {
    background: #00a6ff;
}
</style>

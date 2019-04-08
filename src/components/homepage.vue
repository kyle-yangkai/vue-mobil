<template>
    <div>
      <mt-swipe :auto="0" >
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
      </mt-swipe>
    </div>
</template>
<script>
export default {
  name: 'homepage',
  data (){
    return{
    }
  },
  methods: {
  }
}
</script>
<style scoped>

.mint-swipe {
  height: 200px;
}
</style>

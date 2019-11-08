<template>
  <header>
    <span @click="$router.back(-1)" class="iconfont">&#xe602;</span>
    <p class="title">购物车</p>
  </header>
</template>

<script>
  export default {
    name: "CartHeader"
  }
</script>

<style scoped>
  header {
    justify-content: flex-start;
    padding: 0 .15rem;
  }
  .title {
    font-size: .18rem;
    margin-left: 1.3rem;
  }
</style>
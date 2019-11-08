<template>
  <header class="search-header">
    <span @click="$router.back(-1)" class="iconfont">&#xe602;</span>
    <input type="text" class="search" placeholder="大家正在搜索：护肤套装" />
    <span class="search-btn">搜索</span>
  </header>
</template>

<script>
  export default {
    name: "SeHeader"
  }
</script>

<style scoped>

</style>
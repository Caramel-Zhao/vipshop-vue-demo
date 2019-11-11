<template>
  <header class="user-header">
    <span @click="$router.push('/home')" class="iconfont">&#xe602;</span>
    <router-link tag="span" to="/home" class="more iconfont icon-home"></router-link>
  </header>
</template>

<script>
  export default {
    name: "UserHeader"
  }
</script>

<style lang="scss" scoped>
  .user-header {
    justify-content: space-between;
    padding: 0 .15rem;
    background-color: rgba(255,255,255,0);
  }
</style>
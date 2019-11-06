<template>
  <header>
    <router-link tag="span" to="/login" class="login">登录</router-link>
    <input type="text" class="search" :placeholder="data" />
    <span class="iconfont icon-more"></span>
  </header>
</template>

<script>
  export default {
    name: "HeaderSearch",
    props: ["data"]
  }
</script>

<style lang="scss" scoped>
  .login {
    color: #333;
  }
  .icon-more {
    font-size: .2rem;
    margin-right: .05rem;
    color: #333;
  }
</style>
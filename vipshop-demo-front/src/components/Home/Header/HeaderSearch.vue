<template>
  <header>
    <router-link tag="span" to="/login" class="login">登录</router-link>
    <router-link tag="input" to="/search" type="text" class="search" :placeholder="data" />
    <router-link tag="span" to="/category" class="iconfont icon-more"></router-link>
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
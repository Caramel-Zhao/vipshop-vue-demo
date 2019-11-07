<template>
  <section class="fixed-wrap">
    <header>
      <span @click="$router.back(-1)" class="iconfont">&#xe602;</span>
      <div class="chose">
        <router-link tag="span" to="products" class="chose-item" >分类</router-link>
        <router-link tag="span" to="shops" class="chose-item" >品牌</router-link>
      </div>
      <router-link tag="span" to="/home" class="more iconfont icon-home"></router-link>
    </header>
  </section>
</template>

<script>
  export default {
    name: "CaHeader"
  }
</script>

<style scoped>
  .chose-item.router-link-active {
    background-color: #585c65;
    color: #fff;
  }
</style>
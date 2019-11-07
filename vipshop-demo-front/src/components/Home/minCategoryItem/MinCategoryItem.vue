<template>
<!--  class="current"  -->
  <li>
    <router-link :to=data.src class="channel-item">
      <i :style=data.img></i>
      <span>{{data.title}}</span>
    </router-link>
  </li>
</template>

<script>
  export default {
    name: "MinCategoryItem",
    props: ["data"]
  }
</script>

<style lang="scss" scoped>
  .router-link-active {

    span {
      color: #d34ba8!important;
    }
  }
</style>
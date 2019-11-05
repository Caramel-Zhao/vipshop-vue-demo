<template>
  <li><a href="#" class="nav-item">{{data}}</a></li>
</template>

<script>
  export default {
    name: "NavItem",
    props: ["data"]
  }
</script>

<style lang="scss" scoped>
  li{
    display: block;
    float: left;
    padding: 0 .1rem;
    .nav-item{
      float:left;
      display: block;
      padding-bottom: .08rem;
    }
  }
</style>
<template>
  <div class="final-nav">
    <LaNavItem v-for="(item,i) in data" :key="i" :data="item" />
  </div>
</template>

<script>
  import LaNavItem from "./LaNavItem";
  export default {
    name: "LaNav",
    components: {
      LaNavItem
    },
    props: ["data"]
  }
</script>

<style scoped>
  .final-nav .router-link-active {
    color: #f03190;
    border-bottom: .02rem solid #f03190;
  }
</style>
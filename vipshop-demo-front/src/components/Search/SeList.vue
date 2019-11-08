<template>
  <div class="search-con">
    <h3>热门搜索</h3>
    <div class="search-history">
      <HotSearch v-for="(item,i) in data" :key="i" :data="item" />
    </div>
  </div>
</template>

<script>
  import HotSearch from "./HotSearch";
  export default {
    name: "SeList",
    components: {
      HotSearch
    },
    props: ["data"]
  }
</script>

<style scoped>

</style>
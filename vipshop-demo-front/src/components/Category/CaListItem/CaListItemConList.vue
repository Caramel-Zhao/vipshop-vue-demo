<template>
  <div class="goods-group-con">
    <div class="goods-group-wrap">
      <CaListItemConItem v-for="(item,i) in data.items" :key="i" :data="item" />
    </div>
  </div>
</template>

<script>
  import CaListItemConItem from "./CaListItemConItem";
  export default {
    name: "CaListItemConList",
    components: {
      CaListItemConItem
    },
    props: ["data"]
  }
</script>

<style scoped>

</style>
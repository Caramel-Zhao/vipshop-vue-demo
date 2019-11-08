<template>
  <div class="item-middle">
    <LaItemListItem v-for="(item,i) in data.list" :key="i" :data="item" />
  </div>
</template>

<script>
  import LaItemListItem from "./LaItemListItem";
  export default {
    name: "LaItemList",
    components: {
      LaItemListItem
    },
    props: ["data"]
  }
</script>

<style scoped>

</style>
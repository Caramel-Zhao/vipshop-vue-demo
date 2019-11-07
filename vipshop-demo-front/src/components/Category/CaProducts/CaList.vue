<template>
  <div class="list-con-wrap">
    <CaListItemCon v-for="(item,i) in data" :key="i" :data="item" />
  </div>
</template>

<script>
  import CaListItemCon from "../CaListItem/CaListItemCon";
  export default {
    name: "CaList",
    components: {
      CaListItemCon
    },
    props: ["data"]
  }
</script>

<style scoped>

</style>
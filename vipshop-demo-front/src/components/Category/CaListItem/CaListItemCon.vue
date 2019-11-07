<template>
  <div class="list-con">
    <CaListItemConTitle :data="data" />
    <CaListItemConList :data="data" />
  </div>
</template>

<script>
  import CaListItemConTitle from "./CaListItemConTitle";
  import CaListItemConList from "./CaListItemConList";
  export default {
    name: "CaListItemCon",
    components: {
      CaListItemConTitle,
      CaListItemConList
    },
    props: ["data"]
  }
</script>

<style scoped>

</style>
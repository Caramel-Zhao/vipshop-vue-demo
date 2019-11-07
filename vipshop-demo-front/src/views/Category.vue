<template>
  <div class="more-wrap">
    <CaHeader />
    <router-view />
  </div>
</template>

<script>
  import CaHeader from "../components/Category/CaHeader";
  export default {
    name: "Category",
    components: {
      CaHeader
    }
  }
</script>

<style scoped>
 .more-wrap {
   width: 100%;
 }
</style>
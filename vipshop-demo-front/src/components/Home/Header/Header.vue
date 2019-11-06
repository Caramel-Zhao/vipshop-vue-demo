<template>
  <section class="header-wrap">
    <HeaderSearch v-if="data" :data="data.search" />
    <Nav v-if="data" :data="data.navList" :flag="flag" />
  </section>
</template>

<script>
  import HeaderSearch from "./HeaderSearch";
  import Nav from "./Nav/Nav";
  export default {
    name: "Header",
    components: {
      HeaderSearch,
      Nav
    },
    props: ["data","flag"]
  }
</script>

<style scoped>
  .header-wrap{
    position: sticky;
    left: 0;
    top: 0;
    right: 0;
    z-index: 999;
  }
</style>
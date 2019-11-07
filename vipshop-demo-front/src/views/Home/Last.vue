<template>
  <section class="bgc">
    <LaHeader />
    <LaNav />
    <LaTitle />
    <router-view />
  </section>
</template>

<script>
  import LaHeader from "../../components/Last/LaHeader";
  import LaNav from "../../components/Last/LaNav";
  import LaTitle from "../../components/Last/LaTitle";
  export default {
    name: "Last",
    components: {
      LaHeader,
      LaNav,
      LaTitle
    }
  }
</script>

<style scoped>
  /*.bgc {*/
  /*  background-color: #f3f4f6;*/
  /*}*/
</style>
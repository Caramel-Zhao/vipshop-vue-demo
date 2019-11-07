<template>
  <section>
    <LaBanner />
    <LaMenu />
  </section>
</template>

<script>
  import LaBanner from "./LaHeader/LaBanner";
  import LaMenu from "./LaHeader/LaMenu";
  export default {
    name: "LaHeader",
    components: {
      LaBanner,
      LaMenu
    }
  }
</script>

<style scoped>

</style>
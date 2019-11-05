<template>
  <section>
    <FootToolbar :data="data.footToolbar" />
    <FootDownload />
    <PageFooter />
  </section>
</template>

<script>
  import FootToolbar from "./Footer/FootToolbar";
  import FootDownload from "./Footer/FootDownload";
  import PageFooter from "./Footer/PageFooter";
  export default {
    name: "Footer",
    props: ["data"],
    components: {
      FootToolbar,
      FootDownload,
      PageFooter
    }
  }
</script>

<style lang="scss" scoped>

</style>
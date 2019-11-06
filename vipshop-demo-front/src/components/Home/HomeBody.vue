<template>
  <section>
    <router-view />
    <Footer :data="data" />
    <MiniCart />
    <BackTop />
  </section>
</template>

<script>
  import Footer from "./Footer";
  import MiniCart from "../Common/MiniCart";
  import BackTop from "../Common/BackTop";
  export default {
    name: "HomeBody",
    components: {
      Footer,
      MiniCart,
      BackTop
    },
    props: ["data"]
  }
</script>

<style scoped>

</style>
<template>
  <section>
    <Swiper />
    <Menu />
    <Adv />
    <Grab />
    <LastGrab />
    <Today />
  </section>
</template>

<script>
  import Swiper from "../components/Recommend/Swiper";
  import Menu from "../components/Recommend/Menu";
  import Adv from "../components/Recommend/Adv";
  import Grab from "../components/Recommend/Grab";
  import LastGrab from "../components/Recommend/LastGrab";
  import Today from "../components/Recommend/Today"
  export default {
    name: "Recommend",
    components: {
      Swiper,
      Menu,
      Adv,
      Grab,
      LastGrab,
      Today
    }
  }
</script>

<style scoped>

</style>
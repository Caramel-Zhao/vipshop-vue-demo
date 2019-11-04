<template>
  <section class="today">
    <img src="@/assets/img/1566543733364.jpg" alt="">
    <TodayItem />
  </section>
</template>

<script>
  import TodayItem from "./TodayItem";
  export default {
    name: "index.vue",
    components: {
      TodayItem
    }
  }
</script>

<style scoped>

</style>
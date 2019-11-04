<template>
  <section class="today">
    <img src="@/assets/img/1566543733364.jpg" alt="">
    <TodayItem />
  </section>
</template>

<script>
  import TodayItem from "./TodayItem";
  export default {
    name: "TodayList",
    components: {
      TodayItem
    }
  }
</script>

<style scoped>

</style>
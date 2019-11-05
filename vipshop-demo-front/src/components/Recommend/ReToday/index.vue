<template>
  <section class="today">
    <img src="@/assets/img/1566543733364.jpg" alt="">
    <ReTodayItem />
    <ReTodayListEnd />
  </section>
</template>

<script>
  import ReTodayItem from "./ReTodayItem";
  import ReTodayListEnd from "./ReTodayListEnd";
  export default {
    name: "ReToday",
    components: {
      ReTodayItem,
      ReTodayListEnd
    }
  }
</script>

<style scoped>

</style>
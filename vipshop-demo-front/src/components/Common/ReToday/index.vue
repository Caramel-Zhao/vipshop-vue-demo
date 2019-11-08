<template>
  <section class="today">
    <img src="https://h2.appsimg.com/b.appsimg.com/upload/momin/2019/08/23/111/1566543733364.jpg" alt="">
    <ReTodayItem :data="item" :i="i" v-for="(item,i) in data" :key="i" />
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
    },
    props: ["data"]
  }
</script>

<style scoped>

</style>
<template>
  <div class="sub-item">
    <div class="sub-con">
      <LaItemTitle :data="data" />
      <LaItemList :data="data" />
      <LaItemText :data="data" />
    </div>
  </div>
</template>

<script>
  import LaItemTitle from "./LaItem/LaItemTitle";
  import LaItemList from "./LaItem/LaItemList";
  import LaItemText from "./LaItem/LaItemText";
  export default {
    name: "LaItem",
    components: {
      LaItemTitle,
      LaItemList,
      LaItemText
    },
    props: ["data"]
  }
</script>

<style scoped>

</style>
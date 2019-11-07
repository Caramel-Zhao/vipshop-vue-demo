<template>
  <div class="sub-tital">
    <LaTitleTop />
    <LaTitleBottom />
  </div>
</template>

<script>
  import LaTitleTop from "./LaTitle/LaTitleTop";
  import LaTitleBottom from "./LaTitle/LaTitleBottom";
  export default {
    name: "LaTitle",
    components: {
      LaTitleTop,
      LaTitleBottom
    }
  }
</script>

<style scoped>

</style>
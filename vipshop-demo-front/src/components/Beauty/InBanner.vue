x<template>
  <section class="banner">
    <a href="#" v-for="(item,i) in data" :key="i">
      <img :src=item alt="">
    </a>
  </section>
</template>

<script>
  export default {
    name: "ReBanner",
    props: ["data"]
  }
</script>

<style scoped>

</style>
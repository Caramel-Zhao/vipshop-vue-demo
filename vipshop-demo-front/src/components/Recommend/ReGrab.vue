<template>
  <section class="moudle-1">
    <img class="moudle-bg" src="https://h2.appsimg.com/b.appsimg.com/upload/mst/2019/10/15/147/mst_d56fa74afedc5e1c20d91734819549bd_750x440_90.png" alt="">
    <div v-for="(item,i) in data" :key="i">
      <img :src=item.img alt="" class="moudle-img">
      <img class="moudle-title" :src=item.shopImg alt="">
      <span>¥{{item.price}}</span>
    </div>
  </section>
</template>

<script>
  export default {
    name: "ReGrab",
    props: ["data"]
  }
</script>

<style scoped>

</style>
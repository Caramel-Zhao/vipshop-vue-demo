<template>
  <section class="moudle-1">
    <img class="moudle-bg" :src=data.grabBG alt="">
    <div v-for="(item,i) in data.grabInfo" :key="i">
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
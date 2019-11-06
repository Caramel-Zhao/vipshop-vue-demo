<template>
  <section class="adv">
    <div class="adv-top">
      <img :src=data.title alt="">
    </div>
    <div class="adv-list">
      <a v-for="(item,i) in data.content" :key="i" href="#">
        <img :src=item alt="">
      </a>
    </div>
  </section>
</template>

<script>
  export default {
    name: "ReAdv",
    props: ["data"]
  }
</script>

<style scoped>

</style>
<template>
  <figure class="goods-group-item">
    <div class="pic">
      <img :src=data.img alt="">
    </div>
    <figcaption>{{data.title}}</figcaption>
  </figure>
</template>

<script>
  export default {
    name: "CaListItemConItem",
    props: ["data"]
  }
</script>

<style scoped>

</style>
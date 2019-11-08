<template>
  <section class="moudle-1">
    <img class="moudle-bg" :src=data.lastGrabBG alt="">
    <div class="moudle-sub">
      <div class="moudle-item" v-for="(item,i) in data.lastGrabInfo" :key="i">
        <img :src=item.img alt="">
        <div class="item-price">
          <i class="tag">疯抢价</i>
          <i class="price">¥{{item.price}}</i>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "ReLastGrab",
    props: ["data"]
  }
</script>

<style scoped>

</style>
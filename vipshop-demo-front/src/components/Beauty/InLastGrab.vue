<template>
  <section class="moudle-1">
    <img class="moudle-bg" src="https://h2.appsimg.com/b.appsimg.com/upload/mst/2019/10/29/35/mst_d48a6cdcdf491b1361d6ed8539b3855a_750x515_90.png" alt="">
    <div class="moudle-sub">
      <div class="moudle-item" v-for="(item,i) in data" :key="i">
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
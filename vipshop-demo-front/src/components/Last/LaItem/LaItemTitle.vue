<template>
  <section class="wrap">
    <img :src=data.img alt="">
    <div class="brand-discount">到手价3折封顶</div>
  </section>
</template>

<script>
  export default {
    name: "LaItemtitle",
    props: ["data"]
  }
</script>

<style lang="scss" scoped>
  .wrap {
    position: relative;

    .brand-discount {
      width: 1.4rem;
      height: .22rem;
      border-radius: 0.24rem;
      border: 1px solid #fff;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: .55rem;
      line-height: 0.2rem;
      font-size: 0.12rem;
      color: #fff;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      justify-content: center;
    }
  }
</style>
<template>
  <div @click="backTop" class="back-top">
    <span  class="top-btn">
      <span class="iconfont icon-jiantou">

      </span>
    </span>
  </div>
</template>

<script>
  export default {
    name: "BackTop",
    props: ["backTop"]
  }
</script>

<style lang="scss" scoped>
  .back-top {
    width: .44rem;
    height: .44rem;
    border-radius: 50%;
    background-color: rgba(34,34,34,.9);
    position: fixed;
    right: .1rem;
    bottom: .15rem;
    font-size: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;

    .icon-jiantou {
      font-size: .2rem;
      color: #fff;
    }
  }
</style>
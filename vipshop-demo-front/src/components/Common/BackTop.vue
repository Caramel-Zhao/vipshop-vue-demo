<template>
  <div class="back-top">
    <a href="" class="top-btn">
      <span class="iconfont icon-jiantou">

      </span>
    </a>
  </div>
</template>

<script>
  export default {
    name: "BackTop"
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
<template>
  <div class="min-cart">
    <a href="" class="cart-btn">
      <span class="iconfont icon-iconfontcart-copy">

      </span>
    </a>
  </div>
</template>

<script>
  export default {
    name: "MiniCart"
  }
</script>

<style lang="scss" scoped>
  .min-cart {
    position: fixed;
    width: .45rem;
    height: .45rem;
    bottom: .15rem;
    left: .1rem;
    justify-content: center;
    align-items: center;
    background-color: rgba(25,29,38,.95);
    border-radius: 50%;
    font-size: 0;

    .icon-iconfontcart-copy {
      color: #fff;
      font-size: .3rem;
    }
  }
</style>
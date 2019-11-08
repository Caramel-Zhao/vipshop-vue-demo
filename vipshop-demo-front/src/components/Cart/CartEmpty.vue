<template>
  <div class="shopping-cart-empty">
    <div class="bg"></div>
    <h2>购物车空空如也</h2>
    <p></p>
    <router-link to="/" class="button-primary">
      去抢购
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "CartEmpty"
  }
</script>

<style lang="scss" scoped>
  .shopping-cart-empty {
    width: 100%;
    padding-bottom: .6rem;
    background-color: #fff;
    text-align: center;
    flex-direction: column;
    align-items: center;

    .bg {
      width: 100%;
      height: 2rem;
      background-image: url('../../assets/cart-bg.png');
      background-size: 100% 100%;
    }

    h2 {
      font-size: .16rem;
      margin-top: .2rem;
      font-weight: normal;
    }

    p {
      margin-bottom: .18rem;
    }

    .button-primary {
      font-size: .14rem;
      box-sizing: border-box;
      display: block;
      width: 1.82rem;
      height: .32rem;
      padding: 0 .1rem;
      border: 1px solid #de3c96;
      border-radius: .05rem;
      color: #de3c96;
      line-height: .3rem;
    }
  }
</style>
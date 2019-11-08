<template>
  <section class="wrap">
    <CartHeader />
    <cart-empty />
  </section>
</template>

<script>
  import CartHeader from "../components/Cart/CartHeader";
  import CartEmpty from "../components/Cart/CartEmpty";
  export default {
    name: "Cart.vue",
    components: {
      CartHeader,
      CartEmpty
    }
  }
</script>

<style scoped>
  .wrap {
    width: 100%;
  }
</style>
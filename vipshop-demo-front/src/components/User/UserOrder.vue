<template>
  <div class="user-order">
    <UserOrderItem v-for="(item,i) in data" :key="i" :data="item" />
  </div>
</template>

<script>
  import UserOrderItem from "./UserOrderItem";
  export default {
    name: "UserOrder",
    components: {
      UserOrderItem
    },
    props: ["data"]
  }
</script>

<style lang="scss" scoped>
  .user-order {
    font-size: .12rem;
    justify-content: space-around;
    height: .83rem;
    border-bottom: .005rem solid #ccc;
    padding: .1rem 0;
  }
</style>
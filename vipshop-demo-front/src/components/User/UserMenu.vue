<template>
  <div class="user-menu">
    <ul>
      <UserMenuItem v-for="(item,i) in data" :key="i" :data="item" />
    </ul>
  </div>
</template>

<script>
  import UserMenuItem from "./UserMenuItem";
  export default {
    name: "UserMenu",
    components: {
      UserMenuItem
    },
    props: ["data"]
  }
</script>

<style lang="scss" scoped>
  .user-menu {
    margin: .2rem 0;
    flex-direction: column;
    border-top: .005rem solid #ccc;
    border-bottom: .005rem solid #ccc;

    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }
</style>
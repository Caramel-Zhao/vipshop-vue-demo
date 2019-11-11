<template>
  <div @click="handleToLogout" class="user-logout">
    <p>退出登录</p>
  </div>
</template>

<script>
  export default {
    name: "UserLogout",
    props: ['handleToLogout']
  }
</script>

<style lang="scss" scoped>
  .user-logout {
    margin: .2rem 0;
    justify-content: center;
    align-items: center;
    border-top: .005rem solid #ccc;
    border-bottom: .005rem solid #ccc;
    height: .49rem;
    font-size: .16rem;
  }
</style>
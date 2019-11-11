<template>
  <section class="user-top">
    <UserHeader />
    <UserInfo :email="email" />
  </section>
</template>

<script>
  import UserHeader from "./UserHeader";
  import UserInfo from "./UserInfo";
  export default {
    name: "UserTop",
    components: {
      UserHeader,
      UserInfo
    },
    props: ["email"]
  }
</script>

<style lang="scss" scoped>
  .user-top {
    width: 100%;
    height: 2.05rem;
    background: url("http://h2.vipstatic.com/ms2-m.vipstatic.com/static/base/img/07e0a3f4.user-login-bg.png") 0 0 no-repeat;
    background-size: cover;
  }
</style>
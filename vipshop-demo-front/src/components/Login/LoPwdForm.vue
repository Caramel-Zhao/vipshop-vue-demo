<template>
  <section class="login-body">
    <form action="" method="POST" enctype="application/x-www-form-urlencoded">
      <TopInput :data="data" />
      <div class="code-input input">
        <label for="pwd">密&nbsp;&nbsp;&nbsp;&nbsp;码</label><input type="password" id="pwd" placeholder="请输入密码">
      </div>
      <div class="submit-box">
        <Submit :data="data" />
        <div class="forget"><a href="">忘记密码</a></div>
      </div>
    </form>
  </section>
</template>

<script>
  import TopInput from "./LoForm/TopInput";
  import Submit from "./LoForm/Submit";
  export default {
    name: "LoPwdForm",
    components: {
      TopInput,
      Submit
    },
    props: ["data"]
  }
</script>

<style lang="scss" scoped>
  .forget {
    width: 100%;
    font-size: .1rem;
    justify-content: flex-end;
    padding: .1rem .15rem 0 0;

    a {
      color: #075fc3;
    }
  }
</style>
<template>
  <section class="login-body">
    <form action="" method="POST" enctype="application/x-www-form-urlencoded">
      <TopInput :data="data" />
      <div class="code-input input">
        <label for="pwd">验证码</label><input type="text" id="pwd" placeholder="请输入验证码">
        <button class="code-button">获取验证码</button>
      </div>
      <div class="submit-box">
        <Submit :data="data" />
        <p class="submit-tip"><i class="icon"></i>同意<a href="#">《唯品会服务条款》</a>、<a href="#">《隐私条款》</a>、<a
                href="#">《唯品支付用户服务协议》</a></p>
      </div>
    </form>
  </section>
</template>

<script>
  import TopInput from "./LoForm/TopInput";
  import Submit from "./LoForm/Submit";
  export default {
    name: "LoTelForm",
    components: {
      TopInput,
      Submit
    },
    props: ["data"]
  }
</script>

<style scoped>

</style>
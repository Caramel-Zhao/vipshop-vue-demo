<template>
  <section class="login-body">
    <form action="" method="POST" enctype="application/x-www-form-urlencoded">
      <TopInput :loginData="loginData" :data="data" />
      <div class="code-input input">
        <label for="pwd">验证码</label><input type="text" id="pwd" v-model="loginData.verify" placeholder="请输入验证码">
        <div v-if="verify.flag === false" @click="_handleToVerify" class="code-button">获取验证码</div>
        <div v-else class="code-button">{{verify.time}}s</div>
      </div>
      <div class="submit-box">
        <Submit :_handleToLogin="_handleToLogin" :data="data" />
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
    props: ["data", "loginData", "_handleToLogin", "_handleToVerify", "verify"]
  }
</script>

<style scoped>

</style>
<template>
  <section>
    <LoHeader />
    <LoTelForm :data="formInfo" v-if="logMethod" />
    <LoPwdForm :data="formInfo" v-else />
    <LoType :data="formInfo" :method="updateMethod" />
  </section>
</template>

<script>
  import LoHeader from "../components/Login/LoHeader";
  import LoTelForm from "../components/Login/LoTelForm";
  import LoType from "../components/Login/LoType";
  import LoPwdForm from "../components/Login/LoPwdForm";
  export default {
    name: "Login",
    data() {
      return {
        logMethod: true,
        formInfo: {
          topInput: "手机号",
          topHolder: "请输入手机号",
          subBtn: "手机号注册登录",
          checkBtn: "密码登陆"
        }
      }
    },
    methods: {
      updateMethod() {
        this.logMethod = !this.logMethod
      },
      listen(val) {
        if (val) {
          this.formInfo.topInput = "手机号";
          this.formInfo.topHolder = "请输入手机号";
          this.formInfo.subBtn = "手机号注册登录";
          this.formInfo.checkBtn = "密码登陆";
        } else {
          this.formInfo.topInput = "登录名"
          this.formInfo.topHolder = "请输入手机号或邮箱";
          this.formInfo.subBtn = "登录";
          this.formInfo.checkBtn = "手机号注册登录";
        }
      }
    },
    watch: {
      logMethod: "listen"
    },
    components: {
      LoHeader,
      LoTelForm,
      LoPwdForm,
      LoType
    }
  }
</script>

<style scoped>

</style>
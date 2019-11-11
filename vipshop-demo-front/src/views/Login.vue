<template>
  <section>
    <LoHeader />
    <LoTelForm :verify="verify" :_handleToVerify="_handleToVerify" :_handleToLogin="_handleToLogin" :loginData="loginData" :data="formInfo" v-if="logMethod" />
    <LoPwdForm :data="formInfo" v-else />
    <LoType :data="formInfo" :method="updateMethod" />
  </section>
</template>

<script>
  import LoHeader from "../components/Login/LoHeader";
  import LoTelForm from "../components/Login/LoTelForm";
  import LoType from "../components/Login/LoType";
  import LoPwdForm from "../components/Login/LoPwdForm";
  import loginApi from "../apis/loginApi";
  export default {
    name: "Login",
    data() {
      return {
        logMethod: true,
        formInfo: {
          topInput: "邮箱",
          topHolder: "请输入邮箱",
          subBtn: "邮箱验证登录",
          checkBtn: "密码登陆"
        },
        loginData: {
          email: "",
          verify: ""
        },
        verify: {
          flag: false,
          time: 180
        }
      }
    },
    methods: {
      updateMethod() {
        this.logMethod = !this.logMethod
      },
      countDown() {
        let timer = setInterval(()=>{
          if (this.verify.time > 0) {
            this.verify.time--
          }else {
            this.verify.time = 180;
            this.verify.flag = true;
            clearInterval(timer)
          }
        },1000)
      },
      async _handleToVerify() {
        let reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if (reg.test(this.loginData.email)) {
          let result = await loginApi.handleToVerify(this.loginData.email);
          if (result.status === 0) {
            this.verify.flag = true;
            this.countDown();
          }
        }else {
          alert("邮箱格式有误")
        }
      },
      async _handleToLogin() {
        let result = await loginApi.handleToLogin(this.loginData);
        console.log(result)
        if (result.status === 0) {
          window.localStorage.setItem('email', this.loginData.email);
          this.$router.push('/user')

        } else if (result.status === -1) {
          // Dialog({ message: result.msg });
          alert(result.msg)

        } else if (result.status === -3) {
          // Dialog({ message: result.msg });
          alert(result.msg)
        }
      },
      listen(val) {
        if (val) {
          this.formInfo.topInput = "邮箱";
          this.formInfo.topHolder = "请输入邮箱";
          this.formInfo.subBtn = "邮箱验证登录";
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
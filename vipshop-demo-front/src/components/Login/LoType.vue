<template>
  <fieldset class="J-login-models-m">
    <legend>或</legend>
    <a @click="method" class="login-pop-mobile J-mlogin-login-normal">{{data.checkBtn}}</a>
  </fieldset>
</template>

<script>
  export default {
    name: "LoType",
    props: ["method","data"]
  }
</script>

<style scoped>

</style>
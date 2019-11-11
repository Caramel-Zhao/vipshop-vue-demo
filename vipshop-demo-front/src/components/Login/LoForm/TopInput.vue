<template>
  <div class="tel-input input">
    <label for="tel">{{data.topInput}}</label><input type="text" v-model="loginData.email" id="tel" :placeholder=data.topHolder>
  </div>
</template>

<script>
  export default {
    name: "TopInput",
    props: ["data", "loginData"]
  }
</script>

<style scoped>

</style>
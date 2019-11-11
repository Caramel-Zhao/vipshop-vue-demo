<template>
  <a class="submit-btn" @click="_handleToLogin">{{data.subBtn}}</a>
</template>

<script>
  export default {
    name: "Submit",
    props: ["data", "_handleToLogin"]
  }
</script>

<style scoped>

</style>
<template>
  <div class="tel-input input">
    <label for="tel">{{data.topInput}}</label><input type="text" id="tel" :placeholder=data.topHolder>
  </div>
</template>

<script>
  export default {
    name: "TopInput",
    props: ["data"]
  }
</script>

<style scoped>

</style>
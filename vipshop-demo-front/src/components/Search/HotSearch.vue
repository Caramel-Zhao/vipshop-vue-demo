<template>
  <a :class=data.tag href="#">{{data.title}}</a>
</template>

<script>
  export default {
    name: "HotSearch",
    props: ["data"]
  }
</script>

<style scoped>

</style>
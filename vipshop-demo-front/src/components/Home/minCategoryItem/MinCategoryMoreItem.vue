<template>
  <li>
    <a :href=data.to>
      <span>{{data.title}}</span>
    </a>
  </li>
</template>

<script>
  export default {
    name: "MinCategoryMoreItem",
    props: ["data"]
  }
</script>

<style scoped>

</style>
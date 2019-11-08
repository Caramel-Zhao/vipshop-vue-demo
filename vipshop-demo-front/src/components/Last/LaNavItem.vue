<template>
<!--  <a href="#">今日疯抢(<span>192</span>)</a>-->
  <router-link :to=data.to>{{data.title}}(<span>{{data.num}}</span>)</router-link>
<!--  <a href="#">下期预告(<span>34</span>)</a>-->
</template>

<script>
  export default {
    name: "LaNavItem",
    props: ["data"]
  }
</script>

<style scoped>

</style>
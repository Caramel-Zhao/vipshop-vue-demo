<template>
  <div>
    <span class="son">{{data.title}}</span>
    <span class="son">剩{{data.time}}天</span>
    <div>
      <span>4.6</span>
      <span class="c-color"> {{data.tag}}</span>
      <span class="c-color">{{data.text}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ReTodayItemBottom",
    props: ["data"]
  }
</script>

<style scoped>
  .c-color {
    color: #333!important;
  }
</style>
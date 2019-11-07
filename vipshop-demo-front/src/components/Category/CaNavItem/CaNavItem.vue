<template>
  <div @click="pushIndex(i)" :class=data.checked class="category-item"><span>{{data.title}}</span></div>
<!--   is-active  -->
</template>

<script>
  export default {
    name: "CaNavItem",
    props: ["data","i"],
    methods: {
      pushIndex(i) {
        this.$emit('getIndex',i)
      }
    }
  }
</script>

<style scoped>

</style>
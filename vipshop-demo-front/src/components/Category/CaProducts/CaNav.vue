<template>
  <div class="list-wrap">
    <div class="category-list">
      <CaNavItem @getIndex="getIndex" v-for="(item,i) in data.navList" :key="i" :i="i" :data="item" />
    </div>
  </div>
</template>

<script>
  import CaNavItem from "../CaNavItem/CaNavItem";
  export default {
    name: "CaNav",
    components: {
      CaNavItem
    },
    props: ["data"],
    methods: {
      getIndex(i){
        this.$emit('getIndex',i)
      }
    }
  }
</script>

<style scoped>

</style>
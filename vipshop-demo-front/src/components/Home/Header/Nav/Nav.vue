<template>
  <nav>
    <div class="nav-items wrapper">
      <ul class="nav-items-con content">
        <NavItem v-for="(nav,i) in data" :key="i" :data="nav" />
      </ul>
    </div>
    <span @click="flag" class="nav-list iconfont">&#xe851;</span>
  </nav>
</template>

<script>
  import BScroll from "better-scroll"
  import NavItem from "./NavItem";
  export default {
    name: "Nav",
    props:["data","flag"],
    mounted() {
      new BScroll('.wrapper',{
        scrollX: true,
        click: true
      })
    },
    components: {
      NavItem
    }
  }
</script>

<style lang="scss" scoped>
  .nav-items{
    overflow-x: hidden;
    position: relative;
    .nav-items-con{
      height: .34rem;
      position: absolute;
      width: 4.9rem;
      left: 0;
    }
  }
  .nav-list {
    font-size: .16rem;
  }
</style>
<template>
  <nav>
    <div class="nav-items wrapper">
      <ul class="nav-items-con content">
        <NavItem v-for="(nav,i) in data" :key="i" :data="nav" />
<!--        <li><a href="#" class="nav-item is-active">今日推荐</a></li>-->
<!--        <li><a href="#" class="nav-item">最后疯抢</a></li>-->
<!--        <li><a href="#" class="nav-item">美妆</a></li>-->
<!--        <li><a href="#" class="nav-item">母婴</a></li>-->
<!--        <li><a href="#" class="nav-item">国际</a></li>-->
<!--        <li><a href="#" class="nav-item">家电</a></li>-->
<!--        <li><a href="#" class="nav-item">家电</a></li>-->
<!--        <li><a href="#" class="nav-item">家电</a></li>-->
<!--        <li><a href="#" class="nav-item">家电</a></li>-->
<!--        <li><a href="#" class="nav-item">家电</a></li>-->
<!--        <li><a href="#" class="nav-item">家电</a></li>-->
      </ul>
    </div>
    <span class="nav-list iconfont">&#xe851;</span>
  </nav>
</template>

<script>
  import BScroll from "better-scroll"
  import NavItem from "./NavItem";
  export default {
    name: "Nav",
    props:["data"],
    mounted() {
      new BScroll('.wrapper',{
        scrollX: true
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
    }
  }
</style>
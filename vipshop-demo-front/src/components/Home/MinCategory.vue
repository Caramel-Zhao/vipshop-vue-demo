<template>
  <div class="channel-box">
    <div class="well-chosen-channel">
      <div class="title">
        <h3>精选推荐</h3>
        <span @click="flag" class="nav-list iconfont icon-up"></span>
      </div>
      <ul>
        <MinCategoryItem v-for="(item,i) in data.select" :key="i" :data="item" />
      </ul>
    </div>
    <div class="more-chosen-channel">
      <h3>更多推荐</h3>
      <ul>
        <MinCategoryMoreItem v-for="(item,i) in data.more" :key="i" :data="item" />
      </ul>
    </div>
  </div>
</template>

<script>
  import MinCategoryItem from "./minCategoryItem/MinCategoryItem";
  import MinCategoryMoreItem from "./minCategoryItem/MinCategoryMoreItem";
  export default {
    name: "MinCategory",
    props: ["flag","data"],
    components: {
      MinCategoryItem,
      MinCategoryMoreItem
    }
  }
</script>

<style lang="scss" scoped>
  .title {
    justify-content: space-between;
    align-items: center;

    .nav-list {
      width: .39rem;
      height: .17rem;
      text-align: center;
    }
  }
</style>
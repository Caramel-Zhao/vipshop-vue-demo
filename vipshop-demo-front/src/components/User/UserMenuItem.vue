<template>
  <li class="list-item">
    <a href="#" class="item-content">
      <div class="item-inner">
        <p class="item-title">{{data.title}}</p>
      </div>
      <i class="iconfont icon-right"></i>
    </a>
  </li>
</template>

<script>
  export default {
    name: "UserMenuItem",
    props: ["data"]
  }
</script>

<style lang="scss" scoped>
  .list-item {
    font-size: .16rem;

    .item-content {
      width: 3.5rem;
      height: .49rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: .1rem;
      border-bottom: .005rem solid #ccc;

      .item-title {
        color: #333;
      }
    }
  }
</style>
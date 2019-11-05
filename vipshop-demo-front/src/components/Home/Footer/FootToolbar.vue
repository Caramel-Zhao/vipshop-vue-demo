<template>
  <div class="foot-toolbar">
    <ul class="u-order-list">
      <li v-for="(item,i) in data" :key="i">
        <a href="">
          <span class="iconfont" :class="item.icon"></span>
          <p class="">{{item.title}}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "FootToolbar",
    props: ["data"]
  }
</script>

<style lang="scss" scoped>
  .foot-toolbar {
    width: 100%;
    height: .85rem;
    margin-bottom: .36rem;
    font-size: 0;
  }
  .u-order-list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    li {
      width: 25%;
      padding: .1rem 0;
      border-right: .005rem solid #ccc;
      &:last-child {
        border: none;
      }
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      p {
        font-size: .12rem;
        color: #555;
      }
    }

  }
  .iconfont {
    font-size: .37rem;
    color: #d040a3;
  }
</style>
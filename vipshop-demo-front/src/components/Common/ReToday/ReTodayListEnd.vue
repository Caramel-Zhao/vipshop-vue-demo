<template>
  <section>
    <div class="wrap">

    </div>
    <div class="today-list-end">
      <a href="">点击</a>查看更多在售品牌
    </div>
  </section>
</template>

<script>
  export default {
    name: "ReTodayListEnd"
  }
</script>

<style lang="scss" scoped>
  .wrap{
    width: 100%;
    height: .8rem;
  }
  .today-list-end{
    background-color: #fff;
    width: 100%;
    height: .52rem;
    padding: .2rem .1rem;
    font-size: .12rem;
    line-height: .12rem;
    justify-content: center;
    color: #aaa;
    a{
      color: #d040a3;
      text-decoration: underline;
    }
  }
</style>
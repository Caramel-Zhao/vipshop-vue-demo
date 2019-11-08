<template>
  <section class="category-search">
    <div class="search-btn">
      <router-link tag="button" to="/search" class="btn-con">
        <i class="icon-search"></i>
        <span>搜索品牌或产品</span>
      </router-link>
      <a href="" class="all-btn">全部品牌</a>
    </div>
  </section>
</template>

<script>
  export default {
    name: "CaShopsSearch"
  }
</script>

<style scoped>
  .all-btn {
    font-size: .15rem;
    text-align: center;
    flex: 1;
    position: relative;
    color: #333;
  }
  .all-btn::before {
    content: "";
    position: absolute;
    left: 0;
    top: -.2rem;
    height: .18rem;
    width: 1.5px;
    background-color: #dcdcdc;
    margin-top: .21333rem;
  }
  .btn-con {
    width: 2.33rem;
    height: .37rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
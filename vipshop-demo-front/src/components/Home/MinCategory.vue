<template>
  <div class="channel-box">
    <div class="well-chosen-channel">
      <div class="title">
        <h3>精选推荐</h3>
        <span @click="flag" class="nav-list iconfont icon-up"></span>
      </div>
      <ul>
        <MinCategoryItem v-for="(item,i) in data.select" :key="i" :data="item" />
<!--        <li>-->
<!--          <a href="#" class="channel-item">-->
<!--            <i style="background-image: url('@/../public/img/1533802051022.png')"></i>-->
<!--            <span>最后疯抢</span>-->
<!--          </a>-->
<!--        </li>-->
<!--        <li>-->
<!--          <a href="#" class="channel-item">-->
<!--            <i style="background-image: url('@/../public/img/1495012505829.png')"></i>-->
<!--            <span>美妆</span>-->
<!--          </a>-->
<!--        </li>-->
<!--        <li>-->
<!--          <a href="#" class="channel-item">-->
<!--            <i style="background-image: url('@/../public/img/1537956054861.png')"></i>-->
<!--            <span>母婴</span>-->
<!--          </a>-->
<!--        </li>-->
<!--        <li>-->
<!--          <a href="#" class="channel-item">-->
<!--            <i style="background-image: url('@/../public/img/1537955975711.png')"></i>-->
<!--            <span>国际</span>-->
<!--          </a>-->
<!--        </li>-->
<!--        <li>-->
<!--          <a href="#" class="channel-item">-->
<!--            <i style="background-image: url('@/../public/img/1526645014855.png')"></i>-->
<!--            <span>家电</span>-->
<!--          </a>-->
<!--        </li>-->
<!--        <li>-->
<!--          <a href="#" class="channel-item">-->
<!--            <i style="background-image: url('@/../public/img/1526645175358.png')"></i>-->
<!--            <span>家居</span>-->
<!--          </a>-->
<!--        </li>-->
<!--        <li>-->
<!--          <a href="#" class="channel-item">-->
<!--            <i style="background-image: url('@/../public/img/1495508530492.png')"></i>-->
<!--            <span>生活</span>-->
<!--          </a>-->
<!--        </li>-->
<!--        <li>-->
<!--          <a href="#" class="channel-item">-->
<!--            <i style="background-image: url('@/../public/img/1516257961448.png')"></i>-->
<!--            <span>唯品·奢</span>-->
<!--          </a>-->
<!--        </li>-->
<!--        <li></li>-->
<!--        <li></li>-->
<!--        <li></li>-->
      </ul>
    </div>
    <div class="more-chosen-channel">
      <h3>更多推荐</h3>
      <ul>
        <li><a href="#"><span>女装</span></a></li>
        <li><a href="#"><span>男装</span></a></li>
        <li><a href="#"><span>鞋包</span></a></li>
        <li><a href="#"><span>童装童鞋</span></a></li>
        <li><a href="#"><span>面部护肤</span></a></li>
        <li><a href="#"><span>手表配饰</span></a></li>
        <li><a href="#"><span>内衣</span></a></li>
        <li><a href="#"><span>运动户外</span></a></li>
        <li><a href="#"><span>护肤彩妆</span></a></li>
        <li><a href="#"><span>手机数码</span></a></li>
        <li><a href="#"><span>轻奢</span></a></li>
        <li><a href="#"><span>旗舰店</span></a></li>
        <li><a href="#"><span>国际</span></a></li>
        <li><a href="#"><span>母婴</span></a></li>
        <li><a href="#"><span>家居家纺</span></a></li>
        <li><a href="#"><span>大家电</span></a></li>
        <li><a href="#"><span>家具家装</span></a></li>
        <li><a href="#"><span>生活超市</span></a></li>
        <li><a href="#"><span>医药健康</span></a></li>
        <li><a href="#"><span>国际品牌</span></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import MinCategoryItem from "./MinCategoryItem";
  export default {
    name: "MinCategory",
    props: ["flag","data"],
    components: {
      MinCategoryItem
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
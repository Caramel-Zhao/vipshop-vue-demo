<template>
  <section>
<!--    <ReBanner v-if="recommendInfo" :data="recommendInfo.bannerImg" />-->
<!--    <ReMenu v-if="recommendInfo" :data="recommendInfo" />-->
<!--    <ReAdv v-if="recommendInfo" :data="recommendInfo.advInfo" />-->
    <section class="banner">
      <ul>
        <li><a href="#"><img src="../../../public/img/15710361665564.jpg" alt=""></a></li>
      </ul>
    </section>
    <section class="beauty-banner">
      <div>
        <a href="#"><img src="../../../public/img/15710364375875.jpg" alt=""></a>
        <a href="#"><img src="../../../public/img/15710364563224.jpg" alt=""></a>
        <a href="#"><img src="../../../public/img/15710365145386.jpg" alt=""></a>
      </div>
    </section>
    <!-- category -->
    <section class="category">
      <div class="category-wrap">
        <div class="category-item">
          <a href="#"><img src="../../../public/img/15676716398467.jpg" alt=""></a>
        </div>
        <div class="category-item">
          <a href="#"><img src="../../../public/img/15676724735100.jpg" alt=""></a>
        </div>
        <div class="category-item">
          <a href="#"><img src="../../../public/img/15676728436465.gif" alt=""></a>
        </div>
        <div class="category-item">
          <a href="#"><img src="../../../public/img/15676734068548.jpg" alt=""></a>
        </div>
        <div class="category-item">
          <a href="#"><img src="../../../public/img/15676739448291.jpg" alt=""></a>
        </div>
      </div>
      <div class="category-wrap">
        <div class="category-item">
          <a href="#"><img src="../../../public/img/15676741670263.gif" alt=""></a>
        </div>
        <div class="category-item">
          <a href="#"><img src="../../../public/img/15676742700636.jpg" alt=""></a>
        </div>
        <div class="category-item">
          <a href="#"><img src="../../../public/img/15676743255029.jpg" alt=""></a>
        </div>
        <div class="category-item">
          <a href="#"><img src="../../../public/img/15676744003574.jpg" alt=""></a>
        </div>
        <div class="category-item">
          <a href="#"><img src="../../../public/img/15676744581552.jpg" alt=""></a>
        </div>
      </div>
    </section>
    <!-- adv -->
    <section class="beauty-adv">
      <div class="adv-top">
        <img src="../../../public/img/15708655261495.jpg" alt="">
      </div>
      <div class="adv-list">
        <div class="list-l">
          <span>精华58元</span>
          <img src="../../../public/img/36cc09fa-f4b2-4caf-ac4b-dd873ceb4f33_420_531_150x190_90.jpg" alt="">
        </div>
        <div class="list-l">
          <span>丸美4折抢</span>
          <img src="../../../public/img/8268149e-d7c3-4425-9d80-0b4c4912a56c_420_531_150x190_90.jpg" alt="">
        </div>
      </div>
    </section>
    <ReGrab v-if="recommendInfo" :data="recommendInfo.grabInfo" />
    <ReLastGrab v-if="recommendInfo" :data="recommendInfo.lastGrabInfo" />
    <ReToday v-if="recommendInfo" :data="recommendInfo.todayInfo" />
  </section>
</template>

<script>
  import ReBanner from "../../components/Recommend/ReBanner";
  import ReMenu from "../../components/Recommend/ReMenu";
  import ReAdv from "../../components/Recommend/ReAdv";
  import ReGrab from "../../components/Recommend/ReGrab";
  import ReLastGrab from "../../components/Recommend/ReLastGrab";
  import ReToday from "../../components/Common/ReToday/index";
  import homeApi from "../../apis/homeApi";
  export default {
    name: "Beauty",
    components: {
      ReBanner,
      ReMenu,
      ReAdv,
      ReGrab,
      ReLastGrab,
      ReToday
    },
    data() {
      return {
        recommendInfo: null
      }
    },
    methods: {
      async _initRecommendInfo() {
        this.recommendInfo = await homeApi.getRecommendInfo()
      }
    },
    beforeMount() {
      this._initRecommendInfo()
    }
  }
</script>

<style lang="scss" scoped>
  .banner {
    img {
      width: 100%;
    }
  }
</style>
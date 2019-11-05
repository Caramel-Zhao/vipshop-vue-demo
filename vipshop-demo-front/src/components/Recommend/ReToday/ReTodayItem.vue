<template>
  <div class="today-wrap">
    <div class="today-con">
<!--      <img src="@/assets/img/ias_157172450740357_1135x545_85.jpg" alt="">-->
      <ReTodayItemTop />
      <ReTodayItemBottom />
<!--      <div>-->
<!--        <span class="son">OPPO品牌钜献-手机专场</span>-->
<!--        <span class="son">剩2天</span>-->
<!--        <div>-->
<!--          <span>4.6</span>-->
<!--          <span> 折起</span>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
  import ReTodayItemTop from "./ReTodayItem/ReTodayItemTop";
  import ReTodayItemBottom from "./ReTodayItem/ReTodayItemBottom";
  export default {
    name: "ReTodayItem",
    components: {
      ReTodayItemTop,
      ReTodayItemBottom
    }
  }
</script>

<style scoped>

</style>
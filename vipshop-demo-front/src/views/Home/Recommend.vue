<template>
  <section>
    <ReBanner v-if="recommendInfo" :data="recommendInfo.bannerImg" />
    <ReMenu v-if="recommendInfo" :data="recommendInfo" />
    <ReAdv v-if="recommendInfo" :data="recommendInfo.advInfo" />
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
  import ReToday from "../../components/Recommend/ReToday/index"
  export default {
    name: "Recommend",
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
    created() {
      fetch("http://localhost:3000/api/recommendInfo").then((res) => {
        res.json().then((data) => {
          this.recommendInfo = data
        })
      })
    }
  }
</script>

<style scoped>

</style>
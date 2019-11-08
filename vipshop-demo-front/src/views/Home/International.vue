<template>
  <section>
    <ReBanner v-if="InternationalInfo" :data="InternationalInfo.bannerImg" />
    <ReMenu v-if="InternationalInfo" :data="InternationalInfo" />
    <ReAdv v-if="InternationalInfo" :data="InternationalInfo.advInfo" />
    <ReGrab v-if="InternationalInfo" :data="InternationalInfo.grabInfo" />
    <ReLastGrab v-if="InternationalInfo" :data="InternationalInfo.lastGrabInfo" />
    <ReToday v-if="InternationalInfo" :data="InternationalInfo.todayInfo" />
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
    name: "International",
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
        InternationalInfo: null
      }
    },
    methods: {
      async _initInternationalInfo() {
        this.InternationalInfo = await homeApi.getInternationalInfo()
      }
    },
    beforeMount() {
      this._initInternationalInfo()
    }
  }
</script>

<style scoped>

</style>
<template>
  <section class="today-wrap">
    <LaItem v-if="todayList" v-for="(item,i) in todayList" :key="i" :data="item" />
  </section>
</template>

<script>
  import LaItem from "./LaItem";
  import lastApi from "../../apis/lastApi"
  export default {
    name: "LaTodayList",
    components: {
      LaItem
    },
    data() {
      return {
        todayList: null
      }
    },
    methods: {
      async _initLastData() {
        let lastInfo = await lastApi.getLastInfo()
        this.todayList = lastInfo.todayList
      }
    },
    beforeMount() {
      this._initLastData()
    }
  }
</script>

<style scoped>
  .today-wrap {
    background-color: #fafafa;
    padding-bottom: 1rem;
  }
</style>
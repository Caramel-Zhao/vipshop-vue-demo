<template>
  <section class="bgc">
    <LaHeader />
    <LaNav v-if="lastInfo" :data="lastInfo.nav" />
    <LaTitle />
    <router-view />
    <LaFooter />
  </section>
</template>

<script>
  import LaHeader from "../../components/Last/LaHeader";
  import LaNav from "../../components/Last/LaNav";
  import LaTitle from "../../components/Last/LaTitle";
  import LaFooter from "../../components/Last/LaFooter";
  import lastApi from "../../apis/lastApi"
  export default {
    name: "Last",
    components: {
      LaHeader,
      LaNav,
      LaTitle,
      LaFooter
    },
    data() {
      return {
        lastInfo: null
      }
    },
    methods: {
      async _initLastData() {
        this.lastInfo = await lastApi.getLastInfo()
      }
    },
    beforeMount() {
      this._initLastData()
    }
  }
</script>

<style scoped>
  /*.bgc {*/
  /*  background-color: #f3f4f6;*/
  /*}*/
</style>
<template>
  <section>
    <SeHeader />
    <SeList v-if="searchInfo" :data="searchInfo" />
  </section>
</template>

<script>
  import SeHeader from "../components/Search/SeHeader";
  import SeList from "../components/Search/SeList";
  import searchApi from "../apis/searchApi"
  export default {
    name: "Search",
    components: {
      SeHeader,
      SeList
    },
    data() {
      return {
        searchInfo: null
      }
    },
    methods: {
      async _initSearchInfo() {
        this.searchInfo = await searchApi.getHotSearchInfo()
      }
    },
    beforeMount() {
      this._initSearchInfo()
    }
  }
</script>

<style scoped>

</style>
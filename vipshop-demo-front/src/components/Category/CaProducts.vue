<template>
  <section>
    <CaSearch />
    <section class="category-con">
      <CaNav @getIndex="getIndex" v-if="categoryProductsInfo" :data="categoryProductsInfo" />
      <CaList :data="conList" />
    </section>
  </section>
</template>

<script>
  import CaSearch from "./CaProducts/CaSearch";
  import CaNav from "./CaProducts/CaNav";
  import CaList from "./CaProducts/CaList";
  import categoryApi from '../../apis/categoryApi'
  export default {
    name: "CaProducts",
    components: {
      CaSearch,
      CaNav,
      CaList
    },
    data() {
      return {
        categoryProductsInfo: null,
        conList: null
      }
    },
    methods: {
      getIndex(i) {
        this.conList = this.categoryProductsInfo.conList[i];
        this.categoryProductsInfo.navList.forEach((item) => {
          item.checked = ""
        });
        this.categoryProductsInfo.navList[i].checked = "is-active"
      },
      async _getPageData() {
        let data = await categoryApi.getProductsInfo()
        console.log(data)
        this.categoryProductsInfo = data
        this.conList = data.conList[0]
      }
    },
    beforeMount() {
      this._getPageData()
    }
  }
</script>

<style scoped>

</style>
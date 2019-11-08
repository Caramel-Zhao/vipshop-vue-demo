<template>
  <section>
    <Header :flag="changeCategoryFlag" :data="homeInfo" />
    <MinCategory v-if="categoryFlag" :data="categoryInfo" :flag="changeCategoryFlag" />
    <HomeBody v-else-if="homeInfo" :data="homeInfo.footerInfo" :showBackTop="showBackTop" :backTop="backTop" />
    <Loading v-else />
  </section>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Home/Header/Header";
import MinCategory from "../components/Home/MinCategory";
import HomeBody from "../components/Home/HomeBody";
import Loading from "../components/Common/Loading";
import homeApi from "../apis/homeApi"
export default {
  name: 'home',
  components: {
    Header,
    Loading,
    MinCategory,
    HomeBody
  },
  data(){
    return {
      homeInfo: null,
      categoryFlag: false,
      categoryInfo: null,
      showBackTop: false
    }
  },
  methods: {
    changeCategoryFlag() {
      this.categoryFlag = !this.categoryFlag
    },
    async _initHomeData() {
      this.homeInfo = await homeApi.getHomeInfo()
    },
    async _initMinCate() {
      this.categoryInfo = await homeApi.getMinCateInfo()
    },
    backTop() {
      if (document.documentElement.scrollTop) {
        document.documentElement.scrollTop = 0
      } else if (window.pageYOffset) {
        window.pageYOffset = 0
      } else {
        document.body.scrollTop = 0
      }
      this.showBackTop = false
    },
    handleScroll() {
      let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      if (scrollTop >= 1100) {
        this.showBackTop = true
      } else {
        this.showBackTop = false
      }
    }
  },
  beforeMount() {
    this._initHomeData()
    this._initMinCate()
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll)
  }
}
</script>

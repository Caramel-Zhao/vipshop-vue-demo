<template>
  <section>
    <Header :flag="changeCategoryFlag" :data="homeInfo" />
    <MinCategory v-if="categoryFlag" :data="categoryInfo" :flag="changeCategoryFlag" />
    <HomeBody v-else-if="homeInfo" :data="homeInfo.footerInfo" />
    <Loading v-else />
  </section>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Home/Header/Header";
import MinCategory from "../components/Home/MinCategory";
import HomeBody from "../components/Home/HomeBody";
import Loading from "../components/Common/Loading";
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
      categoryInfo: null
    }
  },
  methods: {
    changeCategoryFlag() {
      this.categoryFlag = !this.categoryFlag
    }
  },
  created() {
    fetch("http://localhost:3000/api/homeInfo").then((res) => {
      res.json().then((data) => {
        this.homeInfo = data
      })
    })
    fetch("http://localhost:3000/api/categoryInfo").then((res) => {
      res.json().then((data) => {
        this.categoryInfo = data
      })
    })
  }
}
</script>

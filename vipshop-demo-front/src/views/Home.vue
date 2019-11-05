<template>
  <section>
    <Header v-if="homeInfo" :data="homeInfo" />
    <router-view />
    <Footer v-if="homeInfo" :data="homeInfo.footerInfo" />
    <MiniCart />
    <BackTop />
  </section>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Home/Header/Header";
import Footer from "../components/Home/Footer";
import MiniCart from "../components/Common/MiniCart";
import BackTop from "../components/Common/BackTop";
export default {
  name: 'home',
  components: {
    Header,
    Footer,
    MiniCart,
    BackTop
  },
  data(){
    return {
      homeInfo: null
    }
  },
  created() {
    fetch("http://localhost:3000/api/homeInfo").then((res) => {
      res.json().then((data) => {
        // this.homeInfo = JSON.parse(data)
        this.homeInfo = data
      })
    })
  }
}
</script>

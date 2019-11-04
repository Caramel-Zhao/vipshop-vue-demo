<template>
  <section>
    <Header />
    <Nav />
    <router-view />
    <Footer />
  </section>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Home/Header";
import Nav from "../components/Home/Nav";
import Footer from "../components/Home/Footer";
export default {
  name: 'home',
  components: {
    Header,
    Nav,
    Footer
  }
}
</script>

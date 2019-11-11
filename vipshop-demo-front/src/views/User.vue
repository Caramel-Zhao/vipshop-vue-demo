<template>
  <section class="user-page">
    <UserTop :email="email" />
    <UserOrder v-if="userData.orders" :data="userData.orders" />
    <UserMenu v-if="userData.menu" :data="userData.menu"/>
    <UserLogout :handleToLogout="handleToLogout" />
    <FootDownload />
    <UserFooter />
  </section>
</template>

<script>
  import UserHeader from "../components/User/UserHeader";
  import UserTop from "../components/User/UserTop";
  import UserOrder from "../components/User/UserOrder";
  import UserMenu from "../components/User/UserMenu";
  import UserLogout from "../components/User/UserLogout";
  import FootDownload from "../components/Home/Footer/FootDownload";
  import UserFooter from "../components/User/UserFooter";
  import userApi from "../apis/userApi";
  import { mapGetters } from "vuex";
  export default {
    name: "User",
    components: {
      UserHeader,
      UserTop,
      UserOrder,
      UserMenu,
      UserLogout,
      FootDownload,
      UserFooter
    },
    computed: {
      ...mapGetters({
        email: 'GET_EMAIL'
      })
    },
    data() {
      return {
        userData: ""
      }
    },
    methods: {
      async _getPageData() {
        this.userData = await userApi.getUserInfo()
      },
      handleToLogout() {
        window.localStorage.removeItem("email")
        this.$router.push('/login')
      }
    },
    beforeMount() {
      this._getPageData()
    },
    mounted() {
      this.$store.dispatch('INIT_EMAIL')
    }
  }
</script>

<style scoped>

</style>
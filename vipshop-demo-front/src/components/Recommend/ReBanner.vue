<template>
  <section class="banner">
<!--    <a href="#" v-for="(item,i) in data" :key="i">-->
<!--      <img :src=item alt="">-->
<!--    </a>-->
    <swiper :options="swiperOption">
      <swiper-slide v-for="(slide, index) in data" :key="index">
        <img :src=slide alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </section>
</template>

<script>
  export default {
    name: "ReBanner",
    props: ["data"],
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        },
      }
    },
    mounted() {
      // setInterval(() => {
      //   console.log('simulate async data')
      //   if (this.data.length < 10) {
      //     this.data.push(this.data.length + 1)
      //   }
      // }, 3000)
    }
  }
</script>

<style>
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-pagination {
    justify-content: flex-end;
    padding-right: .1rem;
  }
  .swiper-pagination-bullet {
    background-color: #ccc;
    width: .05rem;
    height: .05rem;
  }
  .swiper-pagination-bullet-active {
    background-color: #333;
    border: .005rem solid #ccc;
  }
</style>
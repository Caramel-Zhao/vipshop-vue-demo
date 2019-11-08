<template>
  <section class="category">
    <div class="category-wrap">
      <div class="category-item" v-for="(item,i) in data.menuListTop" :key="i">
        <a href="#"><img :src=item.src alt=""></a>
      </div>
    </div>
    <div class="category-wrap">
      <div class="category-item" v-for="(item,i) in data.menuListBottom" :key="i">
        <a href="#"><img :src=item.src alt=""></a>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "ReMenu",
    props: ["data"]
  }
</script>

<style scoped>

</style>
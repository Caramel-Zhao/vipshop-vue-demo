<template>
     <div class="img-box">
        <img :src=data.img alt="">
        <div class="img-tag">
          ¥<span>{{data.price}}</span>
          ¥<del>{{data.old}}</del>
        </div>
      </div>
</template>

<script>
  export default {
    name: "LaItemListItem",
    props: ["data"]
  }
</script>

<style lang="scss" scoped>
  .img-box {

    span {
      margin-right: .05rem;
    }
  }
</style>
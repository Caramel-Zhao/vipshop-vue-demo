<template>
  <a href="#" class="order-item">
    <p class="order-icon">
            <span>
                <i class="iconfont" :class="data.icon"></i>
                <strong></strong>
            </span>
    </p>
    <p class="order-desc">
      <span>{{data.text}}</span>
    </p>
  </a>
</template>

<script>
  export default {
    name: "UserOrderItem",
    props: ["data"]
  }
</script>

<style lang="scss" scoped>
  .order-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .order-icon {
      color: #585c64;

      span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: .38rem;
        height: .38rem;
        background-color: #fcf9f1;
        border-radius: 50%;

        .iconfont {
          font-size: .25rem;
        }
      }
    }

    .order-desc {
      color: #585c64;
    }
  }
</style>
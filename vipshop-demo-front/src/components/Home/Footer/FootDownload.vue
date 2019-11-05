<template>
  <div class="foot-download">
    <a href="" class="footer-download">
      <div class="download-text">
        <span class="logo-bg iconfont icon-weipinhui"></span>
        <p>唯品会客户端，特卖抢不停</p>
      </div>
      <button class="download-button">下载</button>
    </a>
  </div>
</template>

<script>
  export default {
    name: "FootDownload"
  }
</script>

<style lang="scss" scoped>
  .foot-download {
    width: 100%;
    height: .62rem;
    padding: .1rem .15rem;
    background-color: #f3f4f5;
    font-size: 0;
    position: relative;

    .footer-download {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      .download-text {
        font-size: .14rem;
        align-items: center;
        color: #000;
        font-weight: normal;

        .logo-bg {
          width: .42rem;
          height: .42rem;
          background-color: #d040a3;
          border-radius: .1rem;
          margin-right: .1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: .4rem;
          color: #fff;
        }
      }

      .download-button {
        width: .7rem;
        height: .3rem;
        border: .005rem solid #d040a3;
        color: #d040a3;
        background-color: #f3f4f5;
      }
    }

    &::before {
      position: absolute;
      height: .005rem;
      background-color: #ccc;
      bottom: 0;
      width: 100%;
      left: 0;
      right: 0;
      content: "";
      transform: scaleY(.5);
    }
  }
</style>
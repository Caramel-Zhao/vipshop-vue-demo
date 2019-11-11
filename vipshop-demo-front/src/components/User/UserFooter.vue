<template>
  <section class="page-footer">
    <div class="footer-nav">
      <div class="btn-left">
        <a href="">唯品会首页</a>
        <a href="">关于我们</a>
      </div>
      <div class="btn-right">
        <a href="">个人中心</a>
      </div>
    </div>
    <p class="copyright">Copyright © 2008-2017 m.vip.com, All Rights Reserved 粤ICP备08114786号</p>
    <div class="psb">
      <a href="" target="_blank">
        <i class="icon-psb"></i>
        <p>粤公网安备 44010302000068号</p>
      </a>
    </div>
  </section>
</template>

<script>
  export default {
    name: "UserFooter"
  }
</script>

<style lang="scss" scoped>
  .page-footer {
    width: 100%;
    height: 1.44rem;
    background-color: #f3f4f5;

    .footer-nav {
      height: .29rem;
      padding: .05rem .1rem 0;
      font-size: .14rem;
      justify-content: space-between;

      a {
        padding: 0 .05rem;
        color: #333;
      }
    }

    .copyright {
      padding: .15rem .1rem 0;
      color: #ccc;
      font-size: .12rem;
      text-align: center;
      line-height: .2rem;
    }

    .psb {
      width: 3rem;
      margin: 0 auto;
      padding: .2rem 0;
      justify-content: center;

      a {
        font-size: .12rem;
      }

      .icon-psb {
        width: .2rem!important;
        height: .2rem!important;
        /*background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAACWFBMV…KQ0BSXLA72LfErdSzztRdjE4AGqJSMLKu8Igurkpy0KIgPAF1iah19uh7QAAAAAElFTkSuQmCC);*/
        /*background-repeat: no-repeat;*/
      }

      p {
        color: #ccc;
      }
    }
  }
</style>
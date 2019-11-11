<template>
  <div class="user-info">
    <div class="user-photo">
      <img src="http://h2.appsimg.com/b.appsimg.com/2016/03/16/3996/14581158913884.png" alt="">
    </div>
    <div class="user-grade">
      <img src="https://h2.appsimg.com/a.appsimg.com/upload/uls/0/2018/12/11/150/deae2906957a4f30a33577a686379f4f.png" alt="">
      <span>银卡会员</span>
    </div>
    <div class="user-nick">{{email}}</div>
  </div>
</template>

<script>
  export default {
    name: "UserInfo",
    props: ["email"]
  }
</script>

<style lang="scss" scoped>
  .user-info {
    flex-direction: column;
    align-items: center;

    .user-photo {
      width: .8rem;
      height: .8rem;
      justify-content: center;
      align-items: center;
      background: url("../../assets/user.png");
      background-size: cover;

      img {
        width: .71rem;
        height: .71rem;
      }
    }

    .user-grade {
      padding-top: .02rem;
      font-size: .12rem;
      align-items: center;

      img {
        width: .24rem;
      }
    }

    .user-nick {
      margin-top: .15rem;
      font-size: .13rem;
    }
  }
</style>
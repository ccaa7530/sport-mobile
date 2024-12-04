<script setup lang="ts">
// import { ref } from "vue";
defineOptions({
  name: 'entry',
  inheritAttrs: false
})
</script>
<template>
  <div id="entry">
    <div class="card">
      <div class="content">
        <img class="logo" src="../assets/images/logo.png" alt="">
        <img class="football" src="../assets/images/icons/game/football.png" alt="">
        
        <router-link to="/login">
          <van-button type="primary" block>{{ $t('登录') }}</van-button>
        </router-link>
        <router-link to="/register">
          <van-button type="default" block>{{ $t('注册') }}</van-button>
        </router-link>
        <div class="mb-5">{{ $t('使用其它方式登录') }}</div>
        <img class="phone-login mb-32" src="../assets/images/icons/phone-login.svg" alt="">
        
        <div class="flex justify-around">
          <div class="flex">
            <img class="compass" src="../assets/images/icons/compass.svg" alt="">
            <span class="ml-1">{{ $t('先去逛逛') }}</span>
          </div>

          <div class="flex">
            <img class="messageCircle" src="../assets/images/icons/messageCircle.svg" alt="">
            <span class="ml-1">{{ $t('联系我们') }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#entry {
  height: 100%;
  background: url("../assets/images/login-bg.jpg") no-repeat;
  background-size: cover;
  display: grid; /*使用grid排版*/
  grid-template-rows: 1fr auto; /*將上半部設置為一個單位，剩下的部分設為自動高度*/
}

.card {
  height: 544px;
}

.football {
  width: 110px !important;
}
</style>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const account = ref("");
const password = ref("");
const checked = ref(false);

function doLogin() {
  router.push('/')
}

defineOptions({
  name: "login",
  inheritAttrs: false,
});
</script>
<template>
  <div id="login">
    <div class="card">
      <div class="content">
        <van-field
          v-model="account"
          :placeholder="$t('账户名')"
        />
        <van-field
          type="password"
          v-model="password"
          right-icon="closed-eye"
          :placeholder="$t('登录密码')"
        />

        <div class="flex justify-between mb-5">
          <div class="flex">
            <van-checkbox class="mr-1" v-model="checked"></van-checkbox>
            <span>{{$t('记住账号')}}</span>
          </div>
          <div>{{$t('忘记密码')}}</div>
        </div>

        <van-button type="primary" class="login-btn" block @click="doLogin">{{ $t('登录') }}</van-button>

        <div class="mb-5">{{ $t('使用其它方式登录') }}</div>
        <img class="phone-login mx-auto" src="../assets/images/icons/phone-login.svg" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.login-btn {
  margin-bottom: 51px !important;
}

.card {
  border-radius: 0;
}

</style>

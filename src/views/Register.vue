<script setup lang="ts">
import { ref } from "vue";

interface SelectedOptions {
  text: string;
}

const account = ref("");
const password = ref("");
const password2 = ref("");
const currency = ref("");
const language = ref("");
const showCurrencyPicker = ref(false);
const showLanguagePicker = ref(false);
const currencyColumns = (window as any).currencyColumns
const languageColumns = (window as any).languageColumns

const onCurrencyConfirm = ({ selectedOptions }: { selectedOptions: SelectedOptions[] }) => {
  currency.value = selectedOptions[0]?.text;
  showCurrencyPicker.value = false;
};
const onLanguageConfirm = ({ selectedOptions }: { selectedOptions: SelectedOptions[] }) => {
  language.value = selectedOptions[0]?.text;
  showLanguagePicker.value = false;
};
const checked = ref(false);

defineOptions({
  name: "login",
  inheritAttrs: false,
});
</script>
<template>
  <div id="login">
    <div class="card">
      <div class="content">
        <van-field v-model="account" :placeholder="$t('账户名')" />
        <van-field
          type="password"
          v-model="password"
          right-icon="closed-eye"
          :placeholder="$t('登录密码')"
        />
        <van-field
          type="password"
          v-model="password2"
          right-icon="closed-eye"
          :placeholder="$t('重复密码')"
        />
        <van-field
          v-model="currency"
          is-link
          readonly
          name="picker"
          label=""
          :placeholder="$t('点击选择币别')"
          @click="showCurrencyPicker = true"
        />
        <van-popup v-model:show="showCurrencyPicker" position="bottom">
          <van-picker
            :columns="currencyColumns"
            @confirm="onCurrencyConfirm"
            @cancel="showCurrencyPicker = false"
          />
        </van-popup>

        <van-field
          v-model="language"
          is-link
          readonly
          name="picker"
          label=""
          :placeholder="$t('点击选择语言')"
          @click="showLanguagePicker = true"
        />
        <van-popup v-model:show="showLanguagePicker" position="bottom">
          <van-picker
            :columns="languageColumns"
            @confirm="onLanguageConfirm"
            @cancel="showLanguagePicker = false"
          />
        </van-popup>

        <div class="flex justify-between mb-5">
          <div class="flex">
            <van-checkbox class="mr-1" v-model="checked"></van-checkbox>
            <span>
              {{ $t('我已满18岁并且已阅读及同意') }}
              <a href="">{{ $t('开户协议') }}</a>
            </span>
          </div>
        </div>

        <van-button type="primary" class="login-btn" block>
          {{ $t("创建用户") }}
        </van-button>

        <div class="mb-5">{{ $t("使用其它方式登录") }}</div>
        <img
          class="phone-login mx-auto"
          src="../assets/images/icons/phone-login.svg"
          alt=""
        />
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

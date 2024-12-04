<script setup lang="ts">
import {t} from '../lang/index'
import menus from './menu'

const items = [
  {
    title: t('个人资料'),
    icon: 'profile'
  },
  {
    title: t('交易明细'),
    icon: 'trade'
  },
  {
    title: t('我的收藏'),
    icon: 'favorite'
  },
  {
    title: t('卡片管理'),
    icon: 'card'
  },
  {
    title: t('地址管理'),
    icon: 'address'
  },
  {
    title: t('卡券中心'),
    icon: 'coupon'
  },
  {
    title: t('优惠活动'),
    icon: 'activity'
  },
  {
    title: t('分享赚钱'),
    icon: 'share'
  },
  {
    title: t('商务合作'),
    icon: 'cooperate'
  },
  {
    title: t('APP下载'),
    icon: 'app'
  },
]

const items2 = [
  {
    title: t('语言变更'),
    icon: 'profile'
  },
  {
    title: t('时区设置'),
    icon: 'trade'
  },
]

function getImageUrl(title: string) {
  return new URL(`../assets/images/icons/me/${title}.svg`, import.meta.url).href;
}

function getMenuUrl(index: number) {
  return new URL(`../assets/images/icons/tabbar/tab${index + 1}.svg`, import.meta.url).href;
}

defineOptions({
  name: "me",
  inheritAttrs: false,
});
</script>

<template>
  <van-nav-bar :title="t('我的')" :left-text="t('返回')" left-arrow>
    <template #left>
      <van-icon name="envelop-o" size="24" />
    </template>
    <template #right>
      <van-icon name="service-o" size="24" />
    </template>
  </van-nav-bar>

  <div class="card text-left mb-3">
    <div class="text-xl text-black font-bold p-5">{{t('常用功能')}}</div>
    
    <van-cell title="" v-for="(item, index) in items" :key="index" style="padding: 15px">
      <template #title>
        <div class="flex">
          <img :src="getImageUrl(item.icon)" alt="">
          <div class="ml-2">{{ $t(item.title) }}</div>
        </div>
      </template>
      <van-icon name="arrow" size="14" />
    </van-cell>
  </div>

  <div class="card text-left">
    <div class="text-xl text-black font-bold p-5">{{t('系统设定')}}</div>
    
    <van-cell title="" v-for="(item, index) in items2" :key="index" style="padding: 15px">
      <template #title>
        <div class="flex">
          <img :src="getImageUrl(item.icon)" alt="">
          <div class="ml-2">{{ $t(item.title) }}</div>
        </div>
      </template>
      <van-icon name="arrow" size="14" />
    </van-cell>
  </div>

  <van-tabbar route>
    <van-tabbar-item v-for="(menu, index) in menus" :key="index" :to="menu.value">
      <img :src="getMenuUrl(index)" alt="">
      <div class="mt-1 text-xs">{{ $t(`${menu.title}`) }}</div>
    </van-tabbar-item>
  </van-tabbar>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.card {
  padding: 15px 0 !important;
  border-radius: 20px !important;
}
</style>

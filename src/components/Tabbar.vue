<script setup lang="ts">
const menus = (window as any).menus

function getImageUrl(index: number) {
  return new URL(`../assets/images/icons/tabbar/tab${index + 1}.svg`, import.meta.url).href;
}
</script>

<template>
    <div id="tabbar">
        <van-tabbar route>
        <van-tabbar-item v-for="(menu, index) in menus" :key="index" :to="menu.value">
            <img :src="getImageUrl(index)" alt="">
            <div class="mt-1 text-xs">{{ $t(`${menu.title}`) }}</div>
        </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<style scoped>
</style>
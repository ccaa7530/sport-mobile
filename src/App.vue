<script setup lang="ts">
import { RouterView, useRouter, useRoute } from "vue-router";
import "vant/lib/index.css";
import Entry from './views/Entry.vue'
import Home from './views/Home.vue'
import Me from './views/Me.vue'
import SportDetail from "./views/SportDetail.vue";

const router = useRouter();
const route = useRoute();

function onClickLeft() {
  router.back();
}

</script>

<template>
  <Entry v-if="route.name === 'entry'" />
  <Home v-else-if="route.name === 'home'" />
  <Me v-else-if="route.name === 'me'" />
  <SportDetail v-else-if="route.name === 'sport-detail'" />
  <div v-else>
    <van-nav-bar
      title=""
      :left-text="$t('返回')"
      left-arrow
      @click-left="onClickLeft"
    />

    <RouterView />
  </div>
</template>

<style scoped></style>

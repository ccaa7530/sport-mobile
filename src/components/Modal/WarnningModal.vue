<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps(['show'])

console.log(props.show)
</script>

<template>
  <div>
    <van-dialog v-model:show="show" title="网站公告" show-cancel-button>
        <!-- <img src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg" /> -->

        <div>
            网站维护通知
        </div>

        <div>
            ...
        </div>
    </van-dialog>
  </div>
</template>

<style scoped></style>
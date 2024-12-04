<script setup>
import { defineAsyncComponent } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '#333'
  }
})

defineOptions({
  name: 'svg-icon'
})

const DynamicIcon = defineAsyncComponent(() => {
  return import(`@/assets/icons/${props.name}.svg`)
})
</script>
<template>
  <component :is="DynamicIcon" :color="props.color" />
</template>
<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const svgImports = import.meta.glob('../../src/assets/icons/**/*.svg');

const icons = Object.values(svgImports).map((fileImport) => {
  return defineAsyncComponent((): any => fileImport())
})

</script>

<template>
  <div class="flex flex-row flex-wrap gap-2">
    <template v-for="(IconComp, index) in icons" :key="`Icon_${index}`">
      <component :is="IconComp" class="custom-icon" />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.custom-icon {
  width: 100px;
  height: 100px;

  color: blue;
}
</style>
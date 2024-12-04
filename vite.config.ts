import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { VantResolver } from '@vant/auto-import-resolver';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue","vue-router","pinia"],
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    })],
  resolve: {
    alias: [
      {
        find: /@\//, //更改快捷路经
        replacement: path.resolve('src') + '/'
      },
      {
        find: 'vue-i18n',
        replacement: 'vue-i18n/dist/vue-i18n.cjs.js'
      }
    ]
  }
})

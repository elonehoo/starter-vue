/// <reference types="vitest" />
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCss from 'unocss/vite'
import Pages from 'vite-plugin-pages'
import Inspector from 'vite-inspector'
import Alias from 'vite-plugin-alias'
import PKG from 'vite-plugin-package-configs'
import AutoEnv from 'vite-plugin-auto-env'
import Chai from 'vite-plugin-chai'
import Classify from 'vite-plugin-classify'

export default defineConfig({
  plugins: [
    // https://github.com/vite-inspector/vite-inspector
    Inspector({
      framework: 'vue',
    }),

    // https://github.com/vitejs/vite-plugin-vue
    Vue(),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages(),

    // https://github.com/elonehoo/unplugin-auto-import-api
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        '@vueuse/head',
        'vitest',
      ],
      dts: true,
      dirs: [
        './src/composables',
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      dts: true,
    }),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    UnoCss(),

    // https://github.com/elonehoo/vite-plugin-alias
    Alias({
      useConfig: true,
      useTypescript: true,
    }),

    // https://github.com/elonehoo/vite-plugin-package-configs
    PKG(),

    // https://github.com/wip-elonehoo/vite-plugin-chai
    Chai(),

    // https://github.com/wip-elonehoo/vite-plugin-auto-env
    AutoEnv(),

    // https://github.com/wip-elonehoo/vite-plugin-classify
    Classify(),
  ],
})

import { fileURLToPath, URL } from "node:url";

import type { ConfigEnv, defineConfig, UserConfigExport } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { viteMockServe } from "vite-plugin-mock";
import tailwindcss from 'tailwindcss'
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import path from "path";

// https://vitejs.dev/config/

export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    plugins: [vue(), vueJsx(), AutoImport({
      resolvers: [ElementPlusResolver()]
    }), viteMockServe({ mockPath: "mock", localEnabled: command === "serve" }),
      Components({
        resolvers: [ElementPlusResolver(),    // 自动导入图标组件
         ]
      })],
    resolve: {
      // https://cn.vitejs.dev/config/#resolve-alias
      alias: {
        // 设置路径
        "~": path.resolve(__dirname, "./"),
        // 设置别名
        "@": path.resolve(__dirname, "./src")
      }
      // https://cn.vitejs.dev/config/#resolve-extensions 不 建议忽略自定义导入类型的扩展名（例如：.vue），因为它会影响 IDE 和类型支持。
      // extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },


    css: {
                postcss: {
                plugins: [
                    require('autoprefixer'),
                    require('tailwindcss/nesting'),
                    require('tailwindcss'),
                    require('postcss-import')
                ]
            }

    }
  };
}



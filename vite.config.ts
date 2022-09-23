/*
 * @Date: 2022-09-22 11:25:36
 * @LastEditors: shawn
 * @LastEditTime: 2022-09-23 15:02:52
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  server: {
    port: 8088,
  },
});

/*
 * @Date: 2022-09-22 11:25:36
 * @LastEditors: shawn
 * @LastEditTime: 2022-09-23 07:39:11
 */
import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as icons from "@element-plus/icons-vue";
import { toLine } from "./utils";
import router from "./router";
import App from "./App.vue";
import mUI from './components'

const app = createApp(App);
// 全局注册图标，牺牲一点性能
// el-icon-xxx
for (const [key, component] of Object.entries(icons)) {
  app.component(toLine(`el-icon-${key}`), component);
}

app.use(router);
app.use(ElementPlus).use(mUI);
app.mount("#app");

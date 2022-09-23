/*
 * @Date: 2022-09-23 07:41:37
 * @LastEditors: shawn
 * @LastEditTime: 2022-09-23 15:00:22
 */
import { App } from 'vue'
import menu from './src/index.vue'
import infiniteMenu from './src/menu'

// 让这个组件可以通过use的形式使用
export default {
  install(app: App) {
    app.component('m-menu', menu)
    app.component('m-infinite-menu', infiniteMenu)
  }
}
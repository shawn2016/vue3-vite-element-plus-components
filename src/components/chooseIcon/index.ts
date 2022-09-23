/*
 * @Date: 2022-09-23 07:37:12
 * @LastEditors: shawn
 * @LastEditTime: 2022-09-23 07:37:25
 */
import { App } from 'vue'
import chooseIcon from './src/index.vue'

// 让这个组件可以通过use的形式使用
export default {
  install(app: App) {
    app.component('m-choose-icon', chooseIcon)
  }
}
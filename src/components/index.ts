/*
 * @Date: 2022-09-23 07:38:23
 * @LastEditors: shawn
 * @LastEditTime: 2022-09-23 14:17:14
 */
import { App } from 'vue'
import chooseArea from './chooseArea'
import chooseIcon from './chooseIcon'
import trend from './trend'
// import notification from './notification'
// import list from './list'
import menu from './menu'
// import chooseTime from './chooseTime'
// import chooseDate from './chooseDate'
// import progress from './progress'
// import chooseCity from './chooseCity'
// import form from './form'
// import modalForm from './modalForm'
// import table from './table'
// import calendar from './calendar'

const components = [
  chooseArea,
  chooseIcon,
  trend,
//   notification,
//   list,
  menu,
//   chooseTime,
//   chooseDate,
//   chooseCity,
//   progress,
//   form,
//   modalForm,
//   table,
//   calendar
]

export default {
  install(app: App) {
    components.map(item => {
      app.use(item)
    })
  }
}
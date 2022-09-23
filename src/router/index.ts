/*
 * @Date: 2022-09-22 11:29:54
 * @LastEditors: shawn
 * @LastEditTime: 2022-09-23 16:13:10
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../view/Home.vue";
import Container from "../components/container/src/index.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Container,
    children: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/chooseIcon',
        component: () => import('../view/chooseIcon/index.vue')
      },
      {
        path: '/chooseArea',
        component: () => import('../view/chooseArea/index.vue')
      },
      {
        path: '/trend',
        component: () => import('../view/trend/index.vue')
      },
      {
        path: '/notification',
        component: () => import('../view/notification/index.vue')
      },
      {
        path: '/menu',
        component: () => import('../view/menu/index.vue')
      },
      {
        path: '/chooseTime',
        component: () => import('../view/chooseTime/index.vue')
      },
      {
        path: '/progress',
        component: () => import('../view/progress/index.vue')
      },
      {
        path: '/chooseCity',
        component: () => import('../view/chooseCity/index.vue')
      },
      {
        path: '/form',
        component: () => import('../view/form/index.vue')
      },
      {
        path: '/modalForm',
        component: () => import('../view/modalForm/index.vue')
      },
      {
        path: '/table',
        component: () => import('../view/table/index.vue')
      },
      {
        path: '/calendar',
        component: () => import('../view/calendar/index.vue')
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

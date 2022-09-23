/*
 * @Date: 2022-09-22 11:29:54
 * @LastEditors: shawn
 * @LastEditTime: 2022-09-23 14:44:08
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
        path: "/",
        component: Home,
      },
      {
        path: "/chooseIcon",
        component: () => import("../view/chooseIcon/index.vue"),
      },
      {
        path: "/chooseArea",
        component: () => import("../view/chooseArea/index.vue"),
      },
      {
        path: "/trend",
        component: () => import("../view/trend/index.vue"),
      },
      {
        path: "/menu",
        component: () => import("../view/menu/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

<!--
 * @Date: 2022-09-22 14:17:03
 * @LastEditors: shawn
 * @LastEditTime: 2022-09-22 14:50:30
-->
<template>
  <el-container>
    <el-aside width="auto">
      <nav-side v-model:collapse="isCollapse"></nav-side>
    </el-aside>
    <el-container>
      <nav-header v-model:collapse="isCollapse"></nav-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { defineComponent, reactive, toRefs, ref } from "vue";
import NavHeader from "./NavHeader/index.vue";
import NavSide from "./NavSide/index.vue";

const isCollapse = ref(false);
</script>

<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>

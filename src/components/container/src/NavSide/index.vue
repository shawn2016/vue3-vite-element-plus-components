<!--
 * @Date: 2022-09-22 14:46:50
 * @LastEditors: shawn
 * @LastEditTime: 2022-09-22 14:55:06
-->
<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="collapse"
  >
    <el-menu-item index="1">
      <el-icon-menu></el-icon-menu>
      <template #title>导航1</template>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon-menu></el-icon-menu>
      <template #title>导航2</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
defineProps<{
  collapse: boolean;
}>();
</script>

<style scoped lang="scss"></style>

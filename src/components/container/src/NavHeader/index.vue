<!--
 * @Date: 2022-09-22 14:46:54
 * @LastEditors: shawn
 * @LastEditTime: 2022-09-22 15:15:12
-->
<template>
  <el-header>
    <span @click="toggle">
      <el-icon-expand
        v-if="collapse"
        style="margin-right: 10px"
      ></el-icon-expand>
      <el-icon-fold v-else style="margin-right: 10px"></el-icon-fold>
    </span>
  </el-header>
</template>

<script lang="ts" setup>
let props = defineProps<{
  collapse: boolean;
}>();
let emits = defineEmits<{
  (e: "update:collapse", collapse: boolean): void;
}>();

const toggle = function () {
  emits("update:collapse", !props.collapse);
};
</script>

<style scoped lang="scss"></style>

<!--
 * @Date: 2022-09-22 17:03:52
 * @LastEditors: shawn
 * @LastEditTime: 2022-09-23 07:39:24
-->
<template>
  <m-choose-icon title="选择图标" v-model:visible="visible">选择图标</m-choose-icon>
</template>

<script lang="ts" setup>
import { ref } from "vue";
let visible = ref<boolean>(false);
</script>

<style scoped lang="scss"></style>

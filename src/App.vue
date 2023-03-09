<script setup lang="ts">
import tabbar from '@/views/tabbar/index.vue'
</script>

<template>
  <router-view></router-view>
  <tabbar></tabbar>
</template>

<style>
@import 'normalize.css';

#app {
  /** 字体抗锯齿 */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 14px;
}
</style>

<script setup lang="ts">
import tabbar from '@/views/tabbar/index.vue'
import { fetchTest } from '@/api/test'

fetchTest()
</script>

<template>
  <router-view></router-view>
  <tabbar></tabbar>
</template>

<style scoped>

</style>

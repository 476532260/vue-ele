<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Tabbar, TabbarItem } from 'vant'
const route = useRoute()
const router = useRouter()
// 当前选择的tabbar
const active = ref(route.name as string)
watch(active, (newValue) => {
  router.push({
    name: newValue
  })
})
watch(() => route.path, (newValue) => {
  active.value = newValue.slice(1)
})
</script>

<template>
  <tabbar v-model="active">
    <tabbar-item name="home" icon="home-o">首页</tabbar-item>
    <tabbar-item name="order" icon="bars">订单</tabbar-item>
    <tabbar-item name="mine" icon="contact">我的</tabbar-item>
  </tabbar>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import theTop from './components/the-top.vue'
import { TRANSPARENT, WHITE, SHOP_TABS } from './config'

const headerbgColor = ref(TRANSPARENT)
const iconColor = ref(WHITE)
const onTabScroll = ({ isFixed }: { isFixed: boolean }) => {
  headerbgColor.value = isFixed ? WHITE : TRANSPARENT
  iconColor.value = isFixed ? '#000' : WHITE
}
</script>

<template>
  <the-top :headerbg-color="headerbgColor" :icon-color="iconColor"></the-top>
  <van-tabs shrink sticky offset-top="44px" color="#191919" @scroll="onTabScroll">
    <van-tab v-for="item in SHOP_TABS" :key="item.value" :title="item.title">
      <component :is="item.component"></component>
    </van-tab>
  </van-tabs>
</template>

<style lang="scss" scoped>
:deep(.van-tab) {
  margin-right: 16px;
} 

:deep(.van-tab__text) {
  font-size: 16px;
}

:deep(.van-tabs__line) {
  width: 16px;
  bottom: 20px;
  background: #000;
}
</style>
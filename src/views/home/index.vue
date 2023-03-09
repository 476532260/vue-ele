<script setup lang="ts">
import mHeader from '@/components/m-header.vue'
import theTop from './components/the-top.vue'
import searchView from '@/views/search/index.vue'
import shopList from './components/shop-list.vue'
import { useToggle } from '@/use/useToggle'
import { useAsync } from '@/use/useAsync'
import { fetchHomePageData } from '@/api/home'
import type { IHomeInfo } from '@/types'
import mLoading from '@/components/m-loading.vue'

const [isSearchViewShown, toggleSearchView] = useToggle(false)
const { data, pending } = useAsync(fetchHomePageData, {} as IHomeInfo)
</script>

<template>
  <div>
    <transition name="fade">
      <search-view v-if="isSearchViewShown" @cancel="toggleSearchView"></search-view>
    </transition>
    <div v-show="!isSearchViewShown">
      <van-sticky>
        <m-header show-title background="linear-gradient(90deg, rgb(41, 202, 255) 0%, rgb(0, 171, 245) 100%)" color="#fff"></m-header>
      </van-sticky>
      <the-top @searchClick="toggleSearchView"></the-top>
      <van-divider>为你推荐附近的商家</van-divider>
      <!-- <m-loading :loading="pending" type="loading">
        <div>
          {{ data }}
        </div>
      </m-loading> -->
      <shop-list></shop-list>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fade-enter-active, 
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
:deep(.van-divider) {
  margin: var(--van-padding-md) var(--van-padding-sm);
  font-size: var(--van-font-size-sm);
  border-color: var(--van-gray-6);
}
</style>
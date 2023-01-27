<script setup lang="ts">
import TheTop from './components/the-top.vue'
import SearchView from '@/views/search/search-view.vue'
import { useToggle } from '@/use/useToggle'
import { useAsync } from '@/use/useAsync'
import { fetchHomePageData } from '@/api/home'
import type { IHomeInfo } from '@/types'

const recomments = [
  { value: 1, label: '牛腩'},
  { value: 2, label: '色拉'}
]

const [isSearchViewShown, toggleSearchView] = useToggle(false)
const { data, pending } = useAsync(fetchHomePageData, {} as IHomeInfo)
</script>

<template>
  <div class="home">
    <Transition name="fade">
      <search-view v-if="isSearchViewShown" @cancel="toggleSearchView"></search-view>
    </Transition>
    <the-top :recomments="recomments" @searchClick="toggleSearchView"></the-top>
    {{ pending }}
    {{ data }}
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
</style>
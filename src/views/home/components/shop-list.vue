<script setup lang="ts">
import type { IShop } from '@/types'
import { ref } from 'vue'
import { fetchShopList } from '@/api/shop'
import mList from '@/components/list/mList'

let page = 1
const shopList = ref([] as IShop[])
const loading = ref(false)
const finished = ref(false)

const onLoad = async () => {
  const { data, total } = await fetchShopList({
    _page: page++,
    _limit: 5
  })
  shopList.value.push(...data)
  loading.value = true
  if (shopList.value.length >= total) {
    finished.value = true
  }
}
</script>

<template>
  <div class="p-sm space-y-10" style="background: #f5f5f5 linear-gradient(180deg, #fbfbfb 0%, #f5f5f5 0.625rem)">
    <m-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div style="height: 100px" v-for="item in shopList" :key="item.id">{{ item.shopName }}</div>
    </m-list>
  </div>
</template>
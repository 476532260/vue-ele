<script setup lang="ts">
import { ref } from 'vue'
const starValue = ref(4.5)
</script>

<template>
  <div class="flex flex-col px-8 py-sm space-y-10" style="background: #f5f5f5 linear-gradient(180deg, #fbfbfb 0%, #f5f5f5 0.625rem);">
    <div class="p-sm rounded-sm bg-white">
      <div class="flex justify-between">
        <h2 class="text-32 text-score font-bold">4.6</h2>
        <div class="flex flex-col">
          <span class="text-999">高于附近35.5%的商家</span>
          <van-rate allow-half readonly v-model="starValue" :size="10" color="#ffd21e" void-icon="star" void-color="#eee" />
        </div>
        <div class="flex flex-col">
          <span class="text-999">味道</span>
          <span class="text-333">4.6</span>
        </div>
        <div class="flex flex-col">
          <span class="text-999">包装</span>
          <span class="text-333">4.7</span>
        </div>
        <div class="flex flex-col">
          <span class="text-999">配送满意度</span>
          <span class="text-333">88%</span>
        </div>
      </div>
      <div class="flex justify-start flex-wrap">
        <div class="h-28 leading-28 mr-8 mb-8 px-sm bg-f5 text-sm text-333">
          <span class="mr-5">全部</span>
          <span>4721</span>
        </div>
      </div>
      <div>
        <span>1</span>
        <span class="ml-5 text-sm text-999">只看有内容的评价</span>
      </div>
    </div>
    <div class="p-sm rounded-sm bg-white">
      <div class="flex justify-between py-8">
        <div class="w-36 h-36">
          <img class="w-full h-full rounded-lg" src="@/assets/imgs/picture.png">
        </div>
        <div class="flex-grow">
          <h2 class="ml-8 mr-4 font-bold">零***9</h2>
          <span class="mt-6 mr-150 ml-8 text-sm text-999">2023-02-08</span>
        </div>
        <van-icon name="ellipsis" />
      </div>
      <p>喜好他们家的面，喜好他们家的豆浆，真的好好吃，好好喝😁😁😁😁😁😁😁😁</p>
      <div class="mt-4 mb-sm"></div>
    </div>
  </div>
</template>
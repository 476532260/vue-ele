<script setup lang="ts">
import { ref } from 'vue'

const active = ref(0)
</script>

<template>
  <div class="flex w-full overflow-hidden pt-sm" style="height: 1000px;">
    <div>
      <van-sidebar v-model="active">
        <van-sidebar-item title="标签名称" />
      </van-sidebar>
    </div>
    <div class="flex-grow pl-5">
      <div>
        <div class="flex h-40 leading-40">
          <h2 class="font-bold text-14">热销</h2>
          <span class="ml-8 text-12">大家喜欢吃，才叫真好吃。</span>
        </div>
        <div class="flex py-8 pr-sm">
          <div class="flex-shrink-0 w-95 h-95">
            <img class="w-full h-full" src="@/assets/imgs/picture.png">
          </div>
          <div class="ml-8">
            <div class="flex flex-col text-sm">
              <h3 class="text-14 font-bold">茶叶蛋1个</h3>
              <span>口感顺滑，香甜可口。豆香浓郁，甜入心扉。</span>
              <span class="mt-4">月售 636 好评率 93%</span>
            </div>
            <van-tag type="warning">标签</van-tag>
            <div class="flex justify-between">
              <div>
                <span class="text-16 text-price">￥2.8</span>
                <del class="ml-4 text-12">￥3.8</del>
              </div>
              <div>right</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep(.van-sidebar-item) {
  padding: 14px;
  padding-left: 12px;
}

:deep(.van-sidebar-item__text) {
  font-size: 12px;
}
</style>
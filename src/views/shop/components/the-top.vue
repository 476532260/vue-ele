<script setup lang="ts">
interface IProps {
  headerbgColor: string
  iconColor: string
}
defineProps<IProps>()
</script>

<template>
  <div class="relative">
    <img src="@/assets/imgs/poster.jpg">
    <div class="absolute inset-0 bg-gradient-to-b from-masktop to-maskbottom"></div>
  </div>
  <div class="fixed top-0 left-0 z-50 w-full px-sm flex items-center justify-between" style="height: 44px;" :style="{ background: headerbgColor }">
    <div class="w-24 h-24">
      <van-icon name="arrow-left" size="24px" :color="iconColor" />
    </div>
    <div class="flex justify-between items-center">
      <div class="w-24 h-24 mr-20">
        <van-icon name="search" size="24px" :color="iconColor" />
      </div>
      <div class="w-24 h-24">
        <van-icon name="like-o" size="24px" :color="iconColor" />
      </div>
    </div>
  </div>
  <div class="relative m-sm -mt-104 p-sm bg-white rounded-sm">
    <div class="flex justify-between">
      <div class="overflow-hidden">
        <h2 class="overflow-ellipsis overflow-hidden whitespace-nowrap font-bold text-lg">汉堡王（宁波镇海万科店22423）</h2>
        <div class="">
          
        </div>
      </div>
      <img class="w-48 h-48 rounded-sm" src="@/assets/imgs/shop.jpeg">
    </div>
    <div class="overflow-ellipsis overflow-hidden whitespace-nowrap mt-5 text-sm text-999">公告：外送价格和活动与堂食不同。为了支持环保，我们将不再主动为可乐、雪碧等不含固形物的饮料配备吸管，您可通过“直饮杯盖”直接饮用。</div>
  </div>
</template>
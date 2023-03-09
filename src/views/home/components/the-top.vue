<script setup lang="ts">
import mSearch from '@/components/m-search.vue'

interface IEmits {
  (e: 'searchClick'): void
}
const emits = defineEmits<IEmits>()
</script>

<template>
  <div class="bg-gradient-to-r from-bglight to-bgdark">
    <div class="flex items-center p-sm pb-0 rounded-t-2xl bg-white text-base">
      <img class="h-18 w-18 mr-5" src="@/assets/imgs/location.png">
      <div class="location text-333">宁波大学宁波大学宁波大学宁波大学</div>
      <div class="text-sm text-999">美食果蔬医药·30分钟送达</div>
    </div>
    <van-sticky offset-top="44">
      <m-search
        shape="round" 
        background="#fff" 
        placeholder="星巴克  满60减30"
        @inputClick="emits('searchClick')"
      >
        <template #right-icon>
          <div @click="emits('searchClick')">搜索</div>
        </template>
      </m-search>
    </van-sticky>
  </div>
</template>

<style lang="scss" scoped>
.location {
  flex: 1;
  @include ellipsis();
}
</style>

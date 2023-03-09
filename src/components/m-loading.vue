<script setup lang="ts">
interface Iprops {
  loading: boolean
  type: 'loading' | 'skeleton'
}
defineProps<Iprops>()
</script>

<template>
  <div v-if="loading" class="m-loading">
    <slot name="template">
      <div v-if="type === 'loading'" class="flex justify-center items-center h-24">
        <van-loading />
      </div>
      <div v-if="type === 'skeleton'" class="px-6 py-3">
        <van-skeleton :row="10" />
        <van-skeleton title avatar :row="5" />
        <van-skeleton title :row="5" />
      </div>
    </slot>
  </div>
  <slot v-else></slot>
</template>
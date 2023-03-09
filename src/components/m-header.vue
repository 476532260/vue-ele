<script setup lang="ts">
interface IProps {
  background?: string
  showTitle?: boolean
  color?: string
}
defineProps<IProps>()
</script>

<template>
  <div class="p-sm flex items-center text-lg font-bold" :style="{ background, color }" style="height: 44px;">
    <div v-if="showTitle">
      <slot name="title">
        <span>饿了么</span>
      </slot>
    </div>
  </div>
</template>
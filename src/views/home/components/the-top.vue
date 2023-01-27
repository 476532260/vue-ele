<script setup lang="ts">
import type { ISearchRecomment } from '@/types'
import MSearch from '@/components/m-search.vue'

interface IProps {
  recomments: ISearchRecomment[]
}
defineProps<IProps>()

interface IEmits {
  (e: 'searchClick'): void
}
const emits = defineEmits<IEmits>()
</script>

<template>
  <div class="home-top">
    <div class="top">
      <img class="location-icon" src="@/assets/imgs/location.png">
      <div class="location">幸福小区（北-东南门）</div>
      <img class="shopcart-icon" src="@/assets/imgs/shopcart.png">
      <img class="comments-icon" src="@/assets/imgs/comments.png">
    </div>
    <m-search
      shape="round" 
      background="linear-gradient(to right, rgb(53, 200, 250), rgb(31, 175, 243))" 
      placeholder="世界茶饮 35减2"
      @inputClick="emits('searchClick')"
    >
      <template #right-icon>
        <div @click="emits('searchClick')">搜索</div>
      </template>
    </m-search>
    <div class="search-recommend">
      <div v-for="item in recomments" :key="item.value" class="tag">{{ item.label }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-top {
  background: linear-gradient(to right, rgb(53, 200, 250), rgb(31, 175, 243));
  color: #fff;
  .top {
    display: flex;
    align-items: center;
    padding: 10px 10px 0 10px;
    line-height: 15px;
    font-size: 15px;
    font-weight: bold;
    .location-icon {
      width: 20px;
      height: 20px;
    }
    .location {
      flex: 1;
    }
    .shopcart-icon {
      width: 24px;
      height: 24px;
    }
    .comments-icon {
      width: 28px;
      height: 24px;
      margin-left: 10px;
    }
  }
  .search-recommend {
    display: flex;
    padding: 0 10px 8px;
    .tag {
      font-size: 12px;
      border-radius: 10px;
      background: rgb(242, 242, 242, 0.3);
      padding: 2px 8px;
      margin-right: 10px;
    }
  }
}
</style>

<style lang="scss">
.home-top {
  .van-field__right-icon {
    margin-right: 0;
  }
}
</style>
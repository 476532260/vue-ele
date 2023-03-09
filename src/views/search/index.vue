<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import mSearch from '@/components/m-search.vue'
import { fetchSearchData } from '@/api/search'
import { ISearchResult } from '@/types'
import { useToggle } from '@/use/useToggle'
import { useDebounce } from '@/use/useDebounce'

interface IEmits {
  (e: 'cancel'): void
}
const emits = defineEmits<IEmits>()

const HISTORY_TAGS = [
  '鸡柳年糕薯条',
  '柳星螺蛳粉',
  '许记肉夹馍',
  '螺蛳粉',
  '肯德基',
  '必胜客',
  '炸鸡',
  '蚝翅'
]

const DISCOVER_TAGS = [
  '鸡柳年糕薯条',
  '柳星螺蛳粉',
  '许记肉夹馍',
  '螺蛳粉',
  '肯德基',
  '必胜客',
  '炸鸡',
  '蚝翅'
]
const [isHistoryTagShown, toggleHistoryTag] = useToggle(false)
const historyTags = computed(() => isHistoryTagShown.value ? HISTORY_TAGS : HISTORY_TAGS.slice(0, 5))
const discoverTags = ref(DISCOVER_TAGS)

const searchValue = ref('')
const searchResult = ref([] as ISearchResult[])
const [INIT, DONE, DOING] = [-1, 0, 1]
const searchStatus = ref(INIT)

const onSearch = async (item?: string | number) => {
  try {
    searchStatus.value = DOING
    const { list } = await fetchSearchData(item as string)
    searchResult.value = list
  } finally {
    searchStatus.value = DONE
  }
}
const onTagClick = (item: string) => {
  searchValue.value = item
  onSearch(item)
}

const debounceValue = useDebounce(searchValue, 1000)
watch(debounceValue, (newValue) => {
  if (!newValue) {
    searchResult.value = []
    return
  }
  onSearch(newValue as string)
})
</script>

<template>
  <div class="search-view absolute inset-0 bg-white z-50">
    <m-search 
      show-action 
      v-model="searchValue" 
      shape="round" 
      placeholder="请输入搜索关键字"
      @search="onSearch"
      @cancel="emits('cancel')"
    ></m-search>
    <div v-if="!searchValue" class="search-view__history p-sm">
      <div class="pb-10">历史搜索</div>
      <transition-group name="list">
        <div class="history-tag inline-block mr-10 mb-8 px-8 py-4 rounded-sm text-sm" v-for="item in historyTags" :key="item" @click="onTagClick(item)">{{ item }}</div>
        <div class="history-tag inline-block mr-10 mb-8 px-8 py-4 rounded-sm text-sm" key="arrow" @click="toggleHistoryTag">
          <van-icon v-if="isHistoryTagShown" name="arrow-up"></van-icon>
          <van-icon v-else name="arrow-down"></van-icon>
        </div>
      </transition-group>
    </div>
    <div v-if="!searchValue" class="search-view__history p-sm">
      <div class="pb-10">搜索发现</div>
        <div class="history-tag inline-block mr-10 mb-8 px-8 py-4 rounded-sm text-sm" v-for="item in discoverTags" :key="item" @click="onTagClick(item)">{{ item }}</div>
    </div>
    <div v-else class="search-view__result">
      <div class="searching py-104 text-center text-sm" v-if="searchStatus === DOING">~正在搜索</div>
      <template v-if="searchStatus === DONE">
        <div class="result-item flex items-center p-10 text-sm" v-for="item in searchResult" :key="item.label">
          <van-icon name="search"></van-icon>
          <div class="name flex-grow pl-5">{{ item.label }}</div>
          <div class="count text-sm">约{{ item.resultCount }}</div>
        </div>
        <div class="no-result  py-104 text-center text-sm" v-if="!searchResult.length">~暂无推荐</div>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-view {
  &__history {

    .history-tag {
      color: var(--van-gray-6);
      background: var(--van-gray-1);
    }
  }
  &__result {
    .result-item {

      border: 1px solid var(--van-gray-1);
      .name {
      }
      .count {
        color: var(--van-gray-6);
      }
    }
    .no-result,
    .searching {
      color: var(--van-gray-6);
    }
  }
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import MSearch from '@/components/m-search.vue'
import { fetchSearchData } from '@/api/search'
import { Icon } from 'vant'
import { ISearchResult } from '@/types'
import { useToggle } from '@/use/useToggle'
import { useDebounce } from '@/use/useDebounce'

interface IEmits {
  (e: 'cancel'): void
}
const emits = defineEmits<IEmits>()

const HISTORY_TAGS = [
  '比萨',
  '栗子',
  '切果NOW',
  '炒饭',
  '出前一丁',
  '玉米',
  '牛腩',
  '土豆焗饭',
  '烧烤',
  '水果',
]
const [isHistoryTagShown, toggleHistoryTag] = useToggle(false)
const historyTags = computed(() => isHistoryTagShown.value ? HISTORY_TAGS : HISTORY_TAGS.slice(0, 5))

const searchValue = ref('')
const searchResult = ref([] as ISearchResult[])
const [INIT, DONE, DOING] = [-1, 0, 1]
const searchStatus = ref(INIT)
const onSearch = async (v?: string | number) => {
  try {
    searchStatus.value = DOING
    const { list } = await fetchSearchData(v as string)
    searchResult.value = list
  } finally {
    searchStatus.value = DONE
  }
}
const onTagClick = (v: string) => {
  searchValue.value = v
  onSearch(v)
}
// watch(
//   searchValue, 
//   useDebounce((nv) => {
//     if (!nv) {
//       searchResult.value = []
//       return
//     }
//     onSearch(nv as string)
//   }, 1000)
// )
const debounceValue = useDebounce(searchValue, 1000)
watch(debounceValue, (nv) => {
    if (!nv) {
    searchResult.value = []
    return
  }
  onSearch(nv as string)
})
</script>

<template>
  <div class="search-view">
    <m-search 
      show-action 
      v-model="searchValue" 
      shape="round" 
      placeholder="请输入搜索关键字"
      @search="onSearch"
      @cancel="emits('cancel')"
    ></m-search>
    <div v-if="!searchValue" class="search-view__history">
      <div class="label">历史搜索</div>
      <TransitionGroup name="list">
        <div class="history-tag" v-for="v in historyTags" :key="v" @click="onTagClick(v)">{{ v }}</div>
        <div class="history-tag" key="arrow" @click="toggleHistoryTag">
          <icon v-if="isHistoryTagShown" name="arrow-up"></icon>
          <icon v-else name="arrow-down"></icon>
        </div>
      </TransitionGroup>
    </div>
    <div v-else class="search-view__result">
      <div class="searching" v-if="searchStatus === DOING">~正在搜索</div>
      <template v-if="searchStatus === DONE">
        <div class="result-item" v-for="v in searchResult" :key="v.label">
          <icon name="search"></icon>
          <div class="name">{{ v.label }}</div>
          <div class="count">约{{ v.resultCount }}</div>
        </div>
        <div class="no-result" v-if="!searchResult.length">~暂无推荐</div>
      </template>
    </div>
  </div>
</template>

<style lang="scss">
.search-view {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: 999;
  &__history {
    padding: var(--van-padding-sm);
    .label {
      margin-bottom: var(--van-padding-xs);
    }
    .history-tag {
      display: inline-block;
      font-size: 12px;
      border-radius: 10px;
      color: var(--van-gray-6);
      background: var(--van-gray-1);
      padding: 4px 8px;
      margin-right: 10px;
      margin-bottom: var(--van-padding-xs);
    }
  }
  &__result {
    .result-item {
      display: flex;
      align-items: center;
      font-size: 12px;
      padding: 10px;
      border: 1px solid var(--van-gray-1);
      .name {
        flex: 1;
        padding-left: 6px;
      }
      .count {
        font-size: 12px;
        color: var(--van-gray-6);
      }
    }
    .no-result,
    .searching {
      font-size: 12px;
      padding: 100px 0;
      text-align: center;
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
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAsync } from '@/use/useAsync'
import { useAuth } from '@/use/useAuth'
import { fetchMinePageData } from '@/api/mine'
import MLoading from '@/components/m-loading.vue'

const router = useRouter()
const { user, logout } = useAuth()
const { data, pending } = useAsync(fetchMinePageData, {
  cards: [],
})

const gotoLogin = () => {
  router.push({
    name: 'login'
  })
}
</script>

<template>
  <div class="bg-f5 h-screen">
    <div class="flex items-center p-10">
      <template v-if="user._id">
        <img class="w-32 h-32 rounded-full mr-10" :src="user.avatar">
        <div class="flex-1 text-16 font-bold" @click="gotoLogin">{{ user.nickname }}</div>
        <div class="text-main" @click="logout">退出</div>
      </template>
      <template v-else>
        <img class="w-32 h-32 rounded-full mr-10" src="@/assets/imgs/avatar.png">
        <div class="flex-1 text-16 font-bold" @click="gotoLogin">立即登录</div>
        <van-icon name="setting-o" size="25" class="mr-20"></van-icon>
        <van-icon name="comment-o" size="25"></van-icon>
      </template>
    </div>
    <m-loading :loading="pending" type="skeleton">
      <div class="m-10 p-10 rounded-8 bg-white" v-for="item in data.cards" :key="item.label">
        <div class="grid grid-cols-4">
          <div class="mt-10 text-center" v-for="it in item.items" :key="it.iconUrl">
            <van-icon :name="it.iconUrl" :size="item.size"></van-icon>
            <div class="mt-5 text-12">{{ it.label }}</div>
            <span class="font-blod text-999 text-12" v-if="it.text">{{ it.text }}</span>
          </div>
        </div>
      </div>
    </m-loading>
  </div>
</template>
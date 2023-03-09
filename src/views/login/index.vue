<script setup lang="ts">
import type { ILoginInfo } from '@/types'
import { ref } from 'vue'
import { useAuth } from '@/use/useAuth'

const username = ref('')
const password = ref('')
const showPwd = ref(false)
const checked = ref(false)
const loading = ref(false)

const onClickLeft = () => history.back()
const { login } = useAuth() 
const onSubmit = async (data: ILoginInfo) => {
  await login(data)
  onClickLeft()
}
</script>

<template>
  <div class="absolute inset-0 z-50 bg-white">
    <van-nav-bar title="请登录" left-text="返回" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          clearable
          class="text-16"
          v-model="username"
          name="username"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-divider :style="{ color: '#b2b2b2', borderColor: '#b2b2b2', margin: '0', padding: '0 16px'}" />
        <van-field
          class="text-lg mt-5"
          v-model="password"
          :type="showPwd ? 'text' : 'password'"
          name="password"
          placeholder="密码"
          :right-icon="showPwd ? 'eye-o' : 'closed-eye'"
          @click-right-icon="showPwd = !showPwd"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-divider :style="{ color: '#b2b2b2', borderColor: '#b2b2b2', margin: '0', padding: '0 16px' }" />
      </van-cell-group>
      <div class="m-6">
        <van-button 
          round block 
          class="text-lg" 
          :style="{ opacity: checked ? '1' : '50%' }" 
          color="#02b6fd" 
          native-type="submit"
          :loading="loading"
        >
          同意协议并登录
        </van-button>
      </div>
      <van-checkbox class="m-6" icon-size="12px" v-model="checked" shape="square">
        <span class="text-xs">已阅读并同意<span class="text-main">《用户服务协议》</span>、<span class="text-main">《隐私权政策》</span></span>
      </van-checkbox>
    </van-form>
  </div>
</template>

<style lang="scss" scoped>
:deep(input::-webkit-input-placeholder) {
  color: #666;
  font-size: 15px;
}
</style>
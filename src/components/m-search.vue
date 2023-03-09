<script setup lang="ts">
interface IProps {
  background?: string
  placeholder?: string
  shape?: string
  showAction?: boolean
  modelValue?: string | number 
}
const props = defineProps<IProps>()

interface IEmits {
  (e: 'search', v?: string | number): void
  (e: 'update:modelValue', v?: string | number): void 
  (e: 'cancel'): void
  (e: 'clear'): void
  (e: 'inputClick'): void
}
const emits = defineEmits<IEmits>()

const onKeypress = (e: KeyboardEvent) => {
  const ENTER_CODE = 'Enter'
  if (e.code === ENTER_CODE) {
    e.preventDefault()
    emits('search', props.modelValue)
  }
}
const onClear = () => {
  emits('update:modelValue', '')
  emits('clear')
}
</script>

<template>
  <div 
    class="m-search" 
    :class="{ 'm-search--show-action': showAction}"
    :style="{ background }"
  >
    <div class="m-search__content" :class="shape ? `m-search__content--${shape}` : ''">
      <div class="m-cell m-search__field">
        <div class="m-field__left-icon">
          <van-icon name="search"></van-icon>
        </div>
        <div class="m-cell__value">
          <div class="m-field__body">
            <input 
              type="search" 
              class="m-field__control" 
              :value="modelValue" 
              :placeholder="placeholder"
              @keypress="onKeypress"
              @click="emits('inputClick')"
              @input="(e) => emits('update:modelValue', (e.target as HTMLInputElement).value)"
            >
            <div v-if="$slots['right-icon']" class="m-field__right-icon">
              <slot name="right-icon"></slot>
            </div>
            <van-icon 
              v-else-if="modelValue" 
              name="clear" 
              class="m-field__clear" 
              @click="onClear"
            >
            </van-icon>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showAction" class="m-search__action">
      <slot name="action">
        <div @click="emits('cancel')">取消</div>
      </slot>
    </div>
  </div>
</template>

<style lang="scss">
:root {
  --m-search-padding: 10px var(--van-padding-sm);
  --m-search-background-color: var(--van-background-color-light);
  --m-search-content-background: var(--van-gray-1);
  --m-search-left-icon-color: var(--van-gray-6);
  --m-search-action-padding: 0 var(--van-padding-xs);
  --m-search-action-text-color: var(--van-text-color);
  --m-search-action-font-size: var(--van-font-size-md);
  --m-search-input-height: 34px;
  --m-search-border: 1px solid#29caff;
}
.m-search {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: var(--m-search-padding);
  background: var(--m-search-background-color);
  &--show-action {
    padding-right: 0;
  }
  &__content {
    display: flex;
    flex: 1;
    padding-left: var(--van-padding-sm);
    background: var(--m-search-content-background);
    border-radius: var(--van-border-radius-sm);
    border: var(--m-search-border);
    &--round {
      border-radius: 100px;
    }
  }
  &__action {
    padding: var(--m-search-action-padding);
    color: var(--m-search-action-text-color);
    font-size: var(--m-search-action-font-size);
    line-height: var(--m-search-input-height);
    cursor: pointer;
    user-select: none;
  }
  &__field {
    flex: 1;
    padding: 5px var(--van-padding-xs) 5px 0;
    background-color: transparent;
    .field__left-icon {
      color: var(--m-search-left-icon-color);
      margin-right: var(--van-padding-base);
      .van-icon {
        font-size: var(--van-field-icon-size);
      }
    }
  }
}
.m-cell {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  color: var(--van-cell-text-color);
  font-size: var(--van-cell-font-size);
  line-height: var(--van-cell-line-height);
  &__value {
    flex: 1;
    color: var(--van-cell-text-color);
    vertical-align: middle;
    word-wrap: break-word;
  }
}
.m-field {
  &__control {
    display: block;
    box-sizing: border-box;
    width: 100%;
    min-width: 0;
    margin: 0;
    padding: 0;
    border: 0;
    color: var(--van-field-input-text-color);
    line-height: inherit;
    text-align: left;
    background-color: transparent;
    resize: none;
    user-select: none;
    &::placeholder {
      color: var(--van-field-placeholder-text-color);
    }
  }
  &__body {
    display: flex;
    align-items: center;
  }
  &__right-icon {
    color: var(--van-field-right-icon-color);
    padding: 0 var(--van-padding-xs);
    line-height: inherit;
    flex-shrink: 0;
  }
  &__clear {
    color: var(--van-field-clear-icon-color);
    font-size: var(--van-field-clear-icon-size) !important;
    cursor: pointer;
  }
}
input {
  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }
}
</style>
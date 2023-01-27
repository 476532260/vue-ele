<script setup lang="ts">
import { Icon } from 'vant'
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
    class="search" 
    :class="{ 'search--show-action': showAction}"
    :style="{ background }"
  >
    <div class="search__content" :class="shape ? `search__content--${shape}` : ''">
      <div class="cell search__field">
        <div class="field__left-icon">
          <icon name="search"></icon>
        </div>
        <div class="cell__value">
          <div class="field__body">
            <input 
              type="search" 
              class="field__control" 
              :value="modelValue" 
              :placeholder="placeholder"
              @keypress="onKeypress"
              @click="emits('inputClick')"
              @input="(e) => emits('update:modelValue', (e.target as HTMLInputElement).value)"
            >
            <div v-if="$slots['right-icon']" class="field__right-icon">
              <slot name="right-icon"></slot>
            </div>
            <icon 
              v-else-if="modelValue" 
              name="clear" 
              class="field__clear" 
              @click="onClear"
            >
            </icon>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showAction" class="search__action">
      <slot name="action">
        <div @click="emits('cancel')">取消</div>
      </slot>
    </div>
  </div>
</template>

<style lang="scss">
:root {
  --search-padding: 10px var(--van-padding-sm);
  --search-background-color: var(--van-background-color-light);
  --search-content-background: var(--van-gray-1);
  --search-left-icon-color: var(--van-gray-6);
  --search-action-padding: 0 var(--van-padding-xs);
  --search-action-text-color: var(--van-text-color);
  --search-action-font-size: var(--van-font-size-md);
  --search-input-height: 34px;
}
.search {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: var(--search-padding);
  background: var(--search-background-color);
  &--show-action {
    padding-right: 0;
  }
  &__content {
    display: flex;
    flex: 1;
    padding-left: var(--van-padding-sm);
    background: var(--search-content-background);
    border-radius: var(--van-border-radius-sm);
    &--round {
      border-radius: 100px;
    }
  }
  &__action {
    padding: var(--search-action-padding);
    color: var(--search-action-text-color);
    font-size: var(--search-action-font-size);
    line-height: var(--search-input-height);
    cursor: pointer;
    user-select: none;
  }
  &__field {
    flex: 1;
    padding: 5px var(--van-padding-xs) 5px 0;
    background-color: transparent;
    .field__left-icon {
      color: var(--search-left-icon-color);
      margin-right: var(--van-padding-base);
      .van-icon {
        font-size: var(--van-field-icon-size);
      }
    }
  }
}
.cell {
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
.field {
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
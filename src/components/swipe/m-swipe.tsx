import { ref, reactive, computed, onMounted, defineComponent } from 'vue'
import { createNamespace } from '@/utils/create'

const [name, bem] = createNamespace('swipe')

export const SWIPE_KEY = Symbol(name)

export type SwipeState = {
  rect: { width: number; height: number } | null
  width: number
  height: number
  offset: number
  active: number
  swiping: boolean
}

export default defineComponent({
  name,
  props: {
    autoplay: {
      type: Number,
      default: 500
    },
    duration: {
      type: Number,
      default: 500
    },
    loop: {
      type: Boolean,
      default: true
    },
    showIndicators: {
      type: Boolean,
      default: true
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { slots }) {
    const root = ref()
    const track = ref()
    const state = reactive<SwipeState>({
      rect: null,
      offset: 0,
      width: 0,
      height: 0,
      active: 0,
      swiping: false
    })
    const { children, linkChildren } = useChildren(SWIPE_KEY)
    const count = computed(() => children.length)
    const size = computed(() => state[props.vertical ? 'height' : 'width'])
    const trackSize = computed(() => count.value * size.value)
    const trackStyle = computed(() => {
      const mainAxis = props.vertical ? 'height' : 'width'
      const style = {
        transitionDuration: `${state.swiping ? 0 : props.duration}`,
        transform: `translate${props.vertical ? 'Y' : 'X'}(${state.offset}px)`,
        [mainAxis]: `${trackSize.value}px`
      }
      return style
    })
    const move = ({ pace = 0, offset = 0 }) => {
      if (count.value <= 1) {
        return
      }
      const targetActive = getTargetActive(pace)
    }
    const next = () => {
      correctPosition()
      doubleRaf(() => {
        state.swiping = false
        move({
          pace: 1
        })
      })
    }
    let timeout: number
    const stopAutoPlay = () => clearTimeout(timeout)
    const autoplay = () => {
      stopAutoPlay()
      if (props.autoplay > 0 && count.value > 1) {
        timeout = setTimeout(() => {
          next()
          autoplay()
        }, props.autoplay)
      }
    }
    const init = () => {
      if (!root.value) {
        return
      }
      const rect = {
        width: root.value?.offsetWidth,
        height: root.value?.offsetHeight
      }
      state.rect = rect
      state.width = rect.width
      state.height = rect.height
      autoplay()
    }
    onMounted(init)
    return () => <div class={bem()}>
      <div ref={track} class={bem('track')} style={trackStyle.value}>
        {slots.default?.()}
      </div>
    </div>
  }
})
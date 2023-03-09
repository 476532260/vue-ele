import type { IMineInfo } from '@/types'
import axios from './base'

export function fetchMinePageData() {
  return axios.get<IMineInfo, IMineInfo>('mine_page')
}
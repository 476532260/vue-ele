import type { ILoginInfo, IAuth } from '@/types'
import axios from './base'

export const auth = ({ username, password }: ILoginInfo) => {
  return axios.post<IAuth, IAuth>('user/login', {
    username,
    password
  })
}

// export function login(params: any) {
//   return axios.post('user/login', params)
// }
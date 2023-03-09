export interface ILoginInfo {
  username: string
  password: string
}

export interface IUserInfo {
  _id: number | string
  avatar: string
  nickname: string
}

export interface IAuth {
  userInfo: IUserInfo
  token: string
}
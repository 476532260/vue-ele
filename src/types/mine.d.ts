export interface IMineInfo {
  cards: ICard[]
}

export interface ICard {
  label: string
  size: number
  items: IItem[]
}

export interface IItem {
  text: string
  iconUrl: string
  label: string,
  size: number
}

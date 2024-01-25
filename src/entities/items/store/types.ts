
export interface IItemsResponseData {
  items: IItem[],
  page: number,
  pages: number,
  result: number,
}

export interface IItem {
  id: string,
  name: string,
  text?: string
}
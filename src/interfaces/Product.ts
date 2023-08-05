export interface IProducts {
  id: number
  name: string
  type: number
  active: boolean
  createdAt: string
  updatedAt: string
}

export type IProductID = {
  data: {
    id: number
    name: string
    type: number
    active: boolean
    createdAt: string
    updatedAt: string
  }
  message: string
}

export interface IDataProducts {
  data: {
    totalItems: number
    products: IProducts[]
    totalPages: number
    currentPage: number
  }
  message: string
}

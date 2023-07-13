export interface IProviders {
  id?: number
  name: string
  active?: boolean
  createdAt: string
  updatedAt: string | null
}
export interface IProviderID {
  data: {
    id?: number
    name: string
    active?: boolean
    createdAt: string
    updatedAt: string
  }
  message?: string
}

export interface IDataProviders {
  data: {
    totalItems: number
    providers: IProviders[]
    totalPages: number
    currentPage: number
  }
  message: string
}

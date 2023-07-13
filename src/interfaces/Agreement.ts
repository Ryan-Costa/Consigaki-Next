export interface IAgreements {
  id?: number
  name: string
  active?: boolean
  createdAt: string
  updatedAt: string
}
export interface IAgreementID {
  data: {
    id?: number
    name: string
    active?: boolean
    createdAt: string
    updatedAt: string
  }
  message?: string
}
export interface IDataAgreements {
  data: {
    totalItems: number
    agreements: IAgreements[]
    totalPages: number
    currentPage: number
  }
  message: string
}

export type IAgreements = {
  id?: number
  name: string
  active?: boolean
  createdAt: string
  updatedAt: string
}
export type IAgreementID = {
  data: {
    id?: number
    name: string
    active?: boolean
    createdAt: string
    updatedAt: string
  }
  message?: string
}
export type IDataAgreements = {
  data: {
    totalItems: number
    agreements: IAgreements[]
    totalPages: number
    currentPage: number
  }
  message: string
}

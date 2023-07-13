import { Product, Provider, User, UserAgreements } from './IProps'

export interface ILoans {
  id?: number
  userAgreementId: number
  userId: number
  providerId: number
  productId: number
  integrationCode: any
  amouunt: string
  installment: string
  fee: string
  term: number
  status: number
  ccb: any
  adf: any
  ccbUri: any
  adfUri: any
  active: boolean
  createdAt: string
  updatedAt: string
  user: User
  userAgreements: UserAgreements
  provider: Provider
  product: Product
}

export interface ILoanID {
  data: {
    id?: number
    userAgreementId: number
    userId: number
    providerId: number
    productId: number
    integrationCode: any
    amouunt: string
    installment: string
    fee: string
    term: number
    status: number
    ccb: any
    adf: any
    ccbUri: any
    adfUri: any
    active: boolean
    createdAt: string
    updatedAt: string
    user: User
    userAgreements: UserAgreements
    provider: Provider
    product: Product
  }
  message: string
}

export interface IDataLoans {
  data: {
    totalItems: number
    loans: ILoans[]
    totalPages: number
    currentPage: number
  }
  message: string
}

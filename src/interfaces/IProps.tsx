export interface UserProps {
  code: string
  name: string
  cpf?: string
  register: string
  mail?: string
  cellPhoner?: string
  dateBirth?: string
}

export interface IAgreements {
  id: number
  name: string
  active: boolean
  createdAt: string | null
  updatedAt: string | null
}

export interface IDataAgreements {
  data: {
    totalItems: number
    agreements: IAgreements[]
    active: boolean
    createdAt: string
    updatedAt: string | null
  }
}
export interface IProducts {
  id?: number
  name: string
  type?: number
  active?: boolean
  createdAt: string
  updatedAt: string
}

export interface IProductID {
  data: {
    id?: number
    name: string
    type?: number
    active?: boolean
    createdAt: string
    updatedAt: string
  },
  message?: string
}

export interface IDataProducts {
  data: {
    totalItems: number
    products: IProducts[]
    totalPages: number
    currentPage: number
  },
  message: string
}

export interface IProviders {
  id: number
  name: string
  active: boolean
  createdAt: string
  updatedAt: string | null
}

export interface IDataProviders {
  data: {
    totalItems: number
    providers: IProviders[]
    totalPages: number
    currentPage: number
  }
}
export interface ILoans {
  agreementId: string
  userId: string
  cpf: string
  registration: string
  productId: string
  providerId: string
  amouunt: string
  installment: string
  fee: number
  term?: string
}

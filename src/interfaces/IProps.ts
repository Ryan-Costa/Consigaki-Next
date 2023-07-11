export interface UserProps {
  code: string
  name: string
  cpf?: string
  register: string
  mail?: string
  cellPhoner?: string
  dateBirth?: string
}

export interface User {
  id: number
  name: string
  email: string
  cpf: string
  phoneNumber: string
  birthDate: string
  role: number
  blocked: boolean
}

export interface CurrentUserProps {
  id: number
  name: string
  email: string
  birthDate: string
  cpf: string
  phoneNumber: string
  temp: boolean
  active: boolean
  role: number
  codeTokenType: number
  blocked: boolean
  avatar: null
  createdAt: string
  updatedAt: string
}

export interface IDataCurrentUser {
  data: {
    id: number
    name: string
    email: string
    birthDate: string
    cpf: string
    phoneNumber: string
    temp: boolean
    active: boolean
    role: number
    codeTokenType: number
    blocked: boolean
    avatar: null
    createdAt: string
    updatedAt: string
  }
  message: string
}

interface Agreement {
  id: number
  name: string
}

interface Provider {
  id: number
  name: string
}

interface Product {
  id: number
  name: string
}

export interface UserAgreements {
  id: number
  agreement_id: number
  user_id: number
  registration: string
  position: string
  job_title: string
  agreement: Agreement
}

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
  }
  message?: string
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

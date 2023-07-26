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
export interface UserProps {
  code: string
  name: string
  cpf?: string
  register: string
  mail?: string
  cellPhoner?: string
  dateBirth?: string
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
export interface Agreement {
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
export interface Provider {
  id: number
  name: string
}
export interface Product {
  id: number
  name: string
}

export interface IAvatar {
  avatar: string
}

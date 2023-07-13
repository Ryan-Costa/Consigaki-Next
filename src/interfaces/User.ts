export interface IUsers {
  id?: number
  name: string
  email: string
  birthDate: string
  cpf: string
  phoneNumber: string
  temp: boolean
  active?: boolean
  role: number
  codeTokenType: number
  blocked: boolean
  avatar: string
  createdAt: string
  updatedAt: string
}
export interface IUserID {
  data: {
    id?: number
    name: string
    email: string
    birthDate: string
    cpf: string
    phoneNumber: string
    temp: boolean
    active?: boolean
    role: number
    codeTokenType: number
    blocked: boolean
    avatar: string
    createdAt: string
    updatedAt: string
  }
  message?: string
}
export interface IDataUsers {
  data: {
    totalItems: number
    users: IUsers[]
    totalPages: number
    currentPage: number
  }
  message: string
}

export type IUsersID = {
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
  avatar: string
  createdAt: string
  updatedAt: string
}

export type IUser = {
  data: IUsersID
  message: string
}

export type IDataUsers = {
  data: {
    totalItems: number
    users: IUsersID[]
    totalPages: number
    currentPage: number
  }
  message: string
}

export type IDataUsersID = {
  totalItems: number
  users: IUsersID[]
  totalPages: number
  currentPage: number
}

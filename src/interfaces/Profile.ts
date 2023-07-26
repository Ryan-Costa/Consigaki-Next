export interface IProfileID {
  data: {
    id?: number
    name: string
    email: string
    birthDate: string
    cpf: string
    phoneNumber: string
    codeToken?: string
    temp: boolean
    active: boolean
    role: number
    codeTokenType: number
    blocked: boolean
    userToken: string
    avatar?: string
    expoPushToken?: string
    createdAt: string
    updatedAt: string
  }
}

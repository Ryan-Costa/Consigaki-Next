export type Data = {
  id: number
  name: string
  codeToken: string
  temp: boolean
  active: boolean
  role: number
  blocked: boolean
  userToken: string
  email: string
}

export type ErrorType = {
  message: string
}

export type SignInData = {
  cpf: string
  password: string
}

export type SignUpData = {
  cpf: string
  email: string
  password: string
}

export type AuthContextType = {
  isAuthenticated: boolean
  signIn: (data: SignInData) => Promise<void>
  signUp: (data: SignUpData) => Promise<void>
  data?: Data
  messageError: ErrorType | undefined
  isPending: boolean
}

export type TokenType = {
  data: Data
  token: string
}

export type RefreshTokenType = {
  data: string
  message: string
}

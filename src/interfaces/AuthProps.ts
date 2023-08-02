export type DataSignIn = {
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

export type DataSignUp = {
  id: number
  name: string
  email: string
  cpf: string

  codeToken: string
  temp: boolean
  active: boolean
  role: number
  blocked: boolean
  userToken: string
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
  name: string
  email: string
  password: string
}

export type AuthContextType = {
  isAuthenticated: boolean
  signIn: (data: SignInData) => Promise<void>
  signUp: (data: SignUpData) => Promise<void>
  signInData?: DataSignIn
  messageError?: ErrorType
  username: string
  userID: number
}

export type SignInResponse = {
  data: DataSignIn
  token: string
  message: string
}

export type SignUpResponse = {
  data: DataSignUp
  message: string
}

export type RefreshTokenType = {
  data: string
  message: string
}

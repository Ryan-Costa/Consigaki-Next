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

// "id": 13,
// "name": "ryan costa",
// "email": "ryancosta@consigaki.com.br",
// "cpf": "00000000002",
// "password": "",
// "expoPushToken": "teste",
// "temp": false,
// "active": true,
// "role": 1,
// "userToken": "",
// "blocked": false,
// "birthDate": "0001-01-01T00:00:00.000Z",
// "phoneNumber": "",
// "codeTokenType": 0,
// "updatedAt": "2023-07-07T21:01:49.953Z",
// "createdAt": "2023-07-07T21:01:49.953Z"

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
  messageError: ErrorType | undefined
  isPending: boolean
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

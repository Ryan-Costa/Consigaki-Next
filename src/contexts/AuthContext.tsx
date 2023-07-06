'use client'

import { createContext, useState } from 'react'
import { setCookie } from 'nookies'
import api from '@/services/server/api'
import { useRouter } from 'next/navigation'
import {
  AuthContextType,
  Data,
  ErrorType,
  SignInData,
  SignUpData,
  TokenType,
} from '@/interfaces/TokensProps'

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: any) {
  const [data, setData] = useState<Data>()
  const [messageError, setMessageError] = useState<ErrorType>()
  const router = useRouter()

  const isAuthenticated = !!data

  async function signIn({ cpf, password }: SignInData) {
    try {
      const response = await api.post<TokenType>('/login', {
        cpf,
        password,
      })

      const { data, token } = response.data

      setCookie(undefined, 'consigaki.token', token, {
        maxAge: 60 * 60 * 1, // 1 hour
      })

      setData(data)

      router.push('/dashboard')
    } catch (err) {
      if (err instanceof Error) {
        console.log('erro', err)
        const formattedErrorMessage =
          err.message === 'Request failed with status code 409'
            ? 'CPF ou senha inválidos'
            : err.message
        setMessageError({ message: formattedErrorMessage })
      } else {
        console.log('Unexpected error', err)
      }
    }
  }

  async function signUp({ cpf, email, password }: SignUpData) {
    // try {
    //   const response = await api.post<ResponseType>('/createUser', {
    //     cpf,
    //     email,
    //     password,
    //   })

    // }
    console.log('SignUp')
  }

  return (
    <AuthContext.Provider
      value={{ data, isAuthenticated, signIn, signUp, messageError }}
    >
      {children}
    </AuthContext.Provider>
  )
}

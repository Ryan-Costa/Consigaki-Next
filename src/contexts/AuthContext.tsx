'use client'

import { createContext, useState, useTransition } from 'react'
import { setCookie } from 'nookies'
import api from '@/services/server/api'
import { useRouter } from 'next/navigation'
import {
  AuthContextType,
  DataSignIn,
  ErrorType,
  SignInData,
  SignUpData,
  SignInResponse,
  SignUpResponse,
} from '@/interfaces/AuthProps'

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: any) {
  const [isPending, startTransition] = useTransition()
  const [signInData, setSignInData] = useState<DataSignIn>()
  const [messageError, setMessageError] = useState<ErrorType>()
  const router = useRouter()

  const isAuthenticated = !!signInData

  async function signIn({ cpf, password }: SignInData) {
    try {
      startTransition(async () => {
        const response = await api.post<SignInResponse>('/login', {
          cpf,
          password,
          expoPushToken: 'teste',
        })

        const { data, token, message } = response.data

        console.log('mensagem', message)

        setCookie(undefined, 'consigaki.token', token, {
          maxAge: 60 * 60 * 1, // 1 hour
        })
        setSignInData(data)

        router.push('/dashboard')
      })
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

  async function signUp({ cpf, name, email, password }: SignUpData) {
    try {
      // startTransition(async () => {
      const response = await api.post<SignUpResponse>('/users/backoffice', {
        cpf,
        name,
        email,
        password,
        expoPushToken: 'teste',
      })
      const { message } = response.data

      console.log(message)
      // })

      // }
      console.log('SignUp')
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

  return (
    <AuthContext.Provider
      value={{
        signInData,
        isAuthenticated,
        signIn,
        signUp,
        messageError,
        isPending,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

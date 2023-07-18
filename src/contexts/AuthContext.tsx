'use client'

import { createContext, useState } from 'react'
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
  // const [isPending, startTransition] = useTransition()
  const [signInData, setSignInData] = useState<DataSignIn>()
  const [messageError, setMessageError] = useState<ErrorType>()
  const router = useRouter()

  const isAuthenticated = !!signInData

  async function signIn({ cpf, password }: SignInData) {
    // startTransition(async () => {
    api
      .post<SignInResponse>('/login', {
        cpf,
        password,
        expoPushToken: 'teste',
      })
      .then((response) => {
        const { data, token, message } = response.data

        console.log('mensagem', message)

        setCookie(undefined, 'consigaki.token', token, {
          maxAge: 60 * 60 * 1, // 1 hour
        })
        setSignInData(data)
        console.log(data)

        if (data) {
          console.log(data.name)
          setCookie(undefined, 'username', data.name)
        }

        router.push('/dashboard')
      })
      .catch((error) => {
        console.log(error.response)
        if (error.response) {
          console.log(error.response.data)
          // console.log('erro', error)
          // const formattedErrorMessage =
          //   error.message === 'Request failed with status code 409'
          //     ? 'CPF ou senha inválidos'
          //     : error.message
          setMessageError(error.response.data)
        } else {
          console.log('Unexpected error', error)
        }
      })

    // })
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
        // const formattedErrorMessage =
        //   err.message === 'Request failed with status code 409'
        //     ? 'CPF ou senha inválidos'
        //     : err.message
        // setMessageError({ message: formattedErrorMessage })
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
        // isPending,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

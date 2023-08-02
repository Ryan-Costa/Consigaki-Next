'use client'

import { createContext, useEffect, useState } from 'react'
import { parseCookies, setCookie } from 'nookies'
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
import { toUpperCase } from '@/functions/toUpperCase'

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: any) {
  const [signInData, setSignInData] = useState<DataSignIn>()
  const [messageError, setMessageError] = useState<ErrorType>()
  const cookies = parseCookies()
  const [username, setUsername] = useState<string>('')
  const [userID, setUserID] = useState<number>(0)
  const router = useRouter()

  const isAuthenticated = !!signInData

  useEffect(() => {
    if (cookies.username && cookies.userId) {
      setUsername(toUpperCase(cookies.username))
      setUserID(Number(cookies.userId))
    }
  }, [cookies.username, cookies.userId])

  async function signIn({ cpf, password }: SignInData) {
    api
      .post<SignInResponse>('/login', {
        cpf,
        password,
        expoPushToken: 'teste',
      })
      .then((response) => {
        const { data, token } = response.data

        setCookie(undefined, 'consigaki.token', token, {
          maxAge: 60 * 60 * 1, // 1 dia
        })
        setSignInData(data)

        if (data) {
          setCookie(undefined, 'userId', String(data.id))
          setCookie(undefined, 'username', data.name)
        }

        router.push('/dashboard')
      })
      .catch((error) => {
        if (error.response) {
          setMessageError(error.response.data)
        } else {
          console.log('Unexpected error', error)
        }
      })
  }

  async function signUp({ cpf, name, email, password }: SignUpData) {
    try {
      const response = await api.post<SignUpResponse>('/users/backoffice', {
        cpf,
        name,
        email,
        password,
        expoPushToken: 'teste',
      })
      const { message } = response.data

      console.log(message)
    } catch (err) {}
  }

  return (
    <AuthContext.Provider
      value={{
        signInData,
        isAuthenticated,
        signIn,
        signUp,
        messageError,
        username,
        userID,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

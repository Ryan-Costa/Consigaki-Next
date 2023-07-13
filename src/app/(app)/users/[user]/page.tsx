import React from 'react'
import api from '@/services/server/api'
import { IUserID } from '@/interfaces/User'
import UserForm from '@/components/Services/User/UserForm'

export default async function EditUser({
  params,
}: {
  params: { user: string }
}) {
  const response = await api.get<IUserID>(`/users/${params.user}`)
  const usersById = response.data
  console.log(usersById)

  return <UserForm data={usersById} />
}

export async function generateMetadata({
  params,
}: {
  params: { user: string }
}) {
  return {
    title: `Editar Usuário ${params.user}`,
  }
}

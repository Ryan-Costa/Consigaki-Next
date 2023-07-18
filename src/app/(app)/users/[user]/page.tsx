import { IUserID } from '@/interfaces/User'
import UserForm from '@/components/Services/User/UserForm'
import api from '@/services/server/api'

export default async function EditUsers({
  params,
}: {
  params: { user: string }
}) {
  try {
    const response = await api.get<IUserID>(`/users/${params.user}/user`)
    const usersById = response.data
    console.log(usersById)
    return <UserForm data={usersById} />
  } catch (error) {
    console.log(error)
  }
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

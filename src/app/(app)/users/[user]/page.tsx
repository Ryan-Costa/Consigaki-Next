import UserDetails from '@/components/Services/User/UserDetails'
import UserForm from '@/components/Services/User/UserForm'
import { getCurrentUser } from '@/services/getCurrentUser'

export default async function EditUsers({
  params,
}: {
  params: { user: string }
}) {
  try {
    const userData = getCurrentUser(params.user)
    const usersById = await userData

    return (
      <>
        <UserForm dataUserId={usersById} />
        <UserDetails userId={params.user} />
      </>
    )
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

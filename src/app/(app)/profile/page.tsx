import PersonalData from '@/components/Profile/PersonalData'
import { IProfileID } from '@/interfaces/Profile'
import api from '@/services/server/api'

export default async function Profile() {
  try {
    const response = await api.get<IProfileID>(`/users/user`)
    const profileData = response.data
    return <PersonalData data={profileData} />
  } catch (error) {}
}

export async function generateMetadata() {
  return {
    title: 'Dados Pessoais',
  }
}

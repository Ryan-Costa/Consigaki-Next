import { UserAgreement } from '@/interfaces/UserAgreement'
import api from '@/services/server/api'

export const getAgreementsUser = async (userId: string) => {
  const response = await api.get<UserAgreement>(`/user-agreements/${userId}`)
  return response.data
}

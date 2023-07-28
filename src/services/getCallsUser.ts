import { UserCall } from '@/interfaces/UserCalls'
import api from '@/services/server/api'

export const getCallsUser = async (userId: string) => {
  const response = await api.get<UserCall>(`/users-calls/${userId}`)
  return response.data
}

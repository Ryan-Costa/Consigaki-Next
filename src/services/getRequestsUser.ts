import { UserRequest } from '@/interfaces/UserRequest'
import api from '@/services/server/api'

export const getRequestsUser = async (userId: string) => {
  const response = await api.get<UserRequest>(`/loans/${userId}/get-all`)
  return response.data
}

import { IUser } from '@/interfaces/User'
import api from '@/services/server/api'

export const getCurrentUser = async (userId: string) => {
  const response = await api.get<IUser>(`/users/${userId}/user`)
  return response.data
}

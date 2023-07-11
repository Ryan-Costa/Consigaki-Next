import { CurrentUserProps } from '@/interfaces/IProps'
import api from '@/services/server/api'

export const getCurrentUser = async () => {
  const response = await api.get<CurrentUserProps>('/users/user')
  return response.data
}

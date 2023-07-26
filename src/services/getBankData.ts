import { UserBankAccount } from '@/interfaces/UserBankAccount'
import api from '@/services/server/api'

export const getBankData = async (userId: string) => {
  const response = await api.get<UserBankAccount>(
    `/users-bank-account/${userId}`,
  )
  return response.data
}

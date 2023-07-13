import { IDataUsers } from '@/interfaces/User'
import api from '@/services/server/api'

export const getUsers = async (pageNumber: number) => {
  const body = {
    name: '',
    page: pageNumber,
    size: 10,
  }
  try {
    const response = await api.post<IDataUsers>('/users/get-all', body)
    console.log(response)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

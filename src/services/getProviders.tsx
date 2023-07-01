import { IDataProviders } from '@/interfaces/IProps'
import api from '@/services/server/api'

export const getProviders = async (pageNumber: number) => {
  const body = {
    name: '',
    page: pageNumber,
    size: 10,
  }

  const response = await api.post<IDataProviders>('/providers/get-all', body)

  return response.data
}

import { IDataLoans } from '@/interfaces/IProps'
import api from './server/api'

export const getLoans = async (pageNumber: number) => {
  const body = {
    name: '',
    page: pageNumber,
    size: 10,
  }

  const response = await api.post<IDataLoans>('/loans/get-all', body)

  console.log(response)

  return response.data
}

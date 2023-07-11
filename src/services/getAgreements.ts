import { IDataAgreements } from '@/interfaces/IProps'
import api from '@/services/server/api'

export const getAgreements = async (pageNumber: number) => {
  const body = {
    name: '',
    page: pageNumber,
    size: 10,
  }
  const response = await api.post<IDataAgreements>('/agreements/get-all', body)
  return response.data
}

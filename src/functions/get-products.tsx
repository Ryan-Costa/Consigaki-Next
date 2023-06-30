import { IDataProducts } from '@/interfaces/IProps'
import api from '@/services/server/api'

export const getProducts = async (pageNumber: number) => {
  const body = {
    name: '',
    page: pageNumber,
    size: 10,
  }

  const response = await api.post<IDataProducts>('/products/get-all', body)

  console.log(pageNumber)

  return response.data
}

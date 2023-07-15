import { IDataProducts } from '@/interfaces/Product'
import api from '@/services/server/api'

export const getProducts = async (pageNumber: number) => {
  const body = {
    name: '',
    page: pageNumber,
    size: 10,
  }
  try {
    const response = await api.post<IDataProducts>('/products/get-all', body)
    console.log(response)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

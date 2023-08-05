import { IDataProducts } from '@/interfaces/Product'
import api from '@/services/server/api'
import { toast } from 'react-toastify'

export const getProducts = async (pageNumber: number) => {
  const body = {
    name: '',
    page: pageNumber,
    size: 10,
  }

  return api
    .post<IDataProducts>('/products/get-all', body)
    .then((res) => res.data)
    .catch((error) => {
      toast.error('Unexpected error | ', error.message)
    })
}

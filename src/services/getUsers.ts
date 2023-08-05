import { IDataUsers } from '@/interfaces/User'
import api from '@/services/server/api'
import { toast } from 'react-toastify'

export const getUsers = async (pageNumber: number) => {
  const body = {
    name: '',
    page: pageNumber,
    size: 10,
  }
  return api
    .post<IDataUsers>('/users/get-all', body)
    .then((res) => res.data)
    .catch((error) => {
      toast.error('Unexpected Error | ', error.message)
    })
}

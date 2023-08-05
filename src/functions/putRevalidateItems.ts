'use server'

import api from '@/services/server/api'
import { revalidatePath } from 'next/cache'
import { toast } from 'react-toastify'

export async function putRevalidateItems<T = unknown>(url: string, data?: any) {
  return api
    .put<T>(url, data)
    .then((response) => {
      revalidatePath(url)
      return response.data
    })
    .catch((error) => {
      if (error.response) {
        return error.response.data
      } else {
        toast.error('Unexpected error | ', error.message)
      }
    })
}

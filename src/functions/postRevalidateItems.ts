'use server'

import api from '@/services/server/api'
import { revalidatePath } from 'next/cache'

export async function postRevalidateItems<T = unknown>(url: string, data: any) {
  return api
    .post<T>(url, data)
    .then((response) => {
      console.log(response)
      revalidatePath(url)
    })
    .catch((error) => {
      console.log(error)
    })
}

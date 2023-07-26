'use server'

import api from '@/services/server/api'
import { revalidatePath } from 'next/cache'

export async function postRevalidateItems<T = unknown>(url: string, data: any) {
  return api
    .post<T>(url, data)
    .then((response) => {
      console.log(response.data)
      revalidatePath(url)
      return response.data
    })
    .catch((error) => {
      if (error.response) {
        return error.response.data
      } else {
        console.log('Unexpected error', error)
      }
    })
}

// try {
//   const response = await api.post<T>(url, data)
//   console.log(response.data)
//   revalidatePath(url)
//   return response
// } catch (error) {
//   if ((error as any).response && (error as any).response.data) {
//     return (error as any).response
//   } else {
//     console.log('Unexpected error', error)
//     throw error
//   }
// }

// return api
//   .post<T>(url, data)
//   .then((response) => {
//     console.log(response.data)
//     revalidatePath(url)
//   })
//   .catch((error) => {
//     if (error) {
//       console.log(error.response.data)
//     }
//     console.log(error)
//   })

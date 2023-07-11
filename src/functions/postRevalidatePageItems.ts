'use server'

import api from '@/services/server/api'
import { revalidatePath } from 'next/cache'

export async function postRevalidatePageItems<T = unknown>(
  url: string,
  data: any,
) {
  try {
    const response = await api.post<T>(url, data)
    console.log(response)
    revalidatePath(url)
    return response.data // Retorna os dados da resposta
  } catch (error) {
    console.log(error)
    return null // Retorna nulo caso ocorra um erro
  }
}

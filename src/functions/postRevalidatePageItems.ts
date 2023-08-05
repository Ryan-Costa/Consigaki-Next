'use server'

import api from '@/services/server/api'
import { revalidatePath } from 'next/cache'

export async function postRevalidatePageItems<T = unknown>(
  url: string,
  data: any,
) {
  try {
    const response = await api.post<T>(url, data)
    revalidatePath(url)
    return response.data
  } catch (error) {
    return null
  }
}

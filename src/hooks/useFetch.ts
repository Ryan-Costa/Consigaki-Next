import api from '@/services/server/api'

type Body = {
  name: string
  page: number
  size: number
}
export async function useFetch<T = unknown>(url: string, body: Body) {
  const data = await api.post<T>(url, body)

  return data
}

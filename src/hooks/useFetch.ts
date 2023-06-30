import api from '@/services/server/api'
import useSWR from 'swr'

type Body = {
  name: string
  page: number
  size: number
}

export function useFetch<Data = any>(url: string, body: Body) {
  const { data } = useSWR<Data>(url, async (url) => {
    const response = await api.post<Data>(url, body)
    const data = await response.data

    return data
  })

  return { data }
}

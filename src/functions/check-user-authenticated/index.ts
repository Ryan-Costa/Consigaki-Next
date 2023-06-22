import { parseCookies } from 'nookies'
import { cookies } from 'next/headers'

export const checkUserAuthenticated = () => {
  const { 'consigaki.token': token } = parseCookies()
  // const cookieStore = cookies()
  // const token = cookieStore.get('consigaki.token')
  // const token = true;
  return !!token
}

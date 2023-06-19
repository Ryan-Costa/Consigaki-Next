import { parseCookies } from 'nookies'

export const checkUserAuthenticated = () => {
  const { 'consigaki.token': token } = parseCookies()
  // const token = true;
  return !!token
}

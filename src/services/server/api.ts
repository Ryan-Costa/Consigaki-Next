import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { destroyCookie } from 'nookies'
// import { logout } from "@/functions/logout";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CONSIGAKI_API,
})

export const logout = () => {
  destroyCookie(null, 'consigaki.token')
  // redirect('/signin')
}

axiosInstance.interceptors.request.use(
  async (config) => {
    const isServer = typeof window === 'undefined'
    if (isServer) {
      const { cookies } = await import('next/headers')
      const token = cookies().get('consigaki.token')?.value

      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      } else {
        console.log('deletando cookie')
        destroyCookie(null, 'consigaki.token')
      }
    } else {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)consigaki.token\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
      )

      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      } else {
        logout()
      }
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

const api = (axios: AxiosInstance) => {
  return {
    get: function <T>(url: string, config: AxiosRequestConfig = {}) {
      return axios.get<T>(url, config)
    },
    put: function <T>(
      url: string,
      body: unknown,
      config: AxiosRequestConfig = {},
    ) {
      return axios.put<T>(url, body, config)
    },
    post: function <T>(
      url: string,
      body: unknown,
      config: AxiosRequestConfig = {},
    ) {
      return axios.post<T>(url, body, config)
    },
    delete: function <T>(url: string, config: AxiosRequestConfig = {}) {
      return axios.delete<T>(url, config)
    },
  }
}

export default api(axiosInstance)

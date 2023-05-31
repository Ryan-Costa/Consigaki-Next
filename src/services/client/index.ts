import axios from 'axios'

const config = {
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
}

const _axios = axios.create(config)

export async function fetchUser(id: string) {
  return axios.get('/user/', {
    params: { id },
  })
}

// _axios.interceptors.request.use(
//   (config: any) => {
//     const { "bussola-token": token } = parseCookies();
//     if (token) {
//       config.headers.Authorization = Bearer ${token};
//     }
//     return config;
//   },
//   (error) => error
// );

export default _axios

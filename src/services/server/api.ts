import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { parseCookies } from "nookies";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CONSIGAKI_API,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const { "consigaki.token": token } = parseCookies();

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    } else {
      // redireciona pra tela de login
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const api = (axios: AxiosInstance) => {
  return {
    get: function <T>(url: string, config: AxiosRequestConfig = {}) {
      return axios.get<T>(url, config);
    },
    put: function <T>(
      url: string,
      body: unknown,
      config: AxiosRequestConfig = {}
    ) {
      return axios.put<T>(url, body, config);
    },
    post: function <T>(
      url: string,
      body: unknown,
      config: AxiosRequestConfig = {}
    ) {
      return axios.post<T>(url, body, config);
    },
    delete: function <T>(url: string, config: AxiosRequestConfig = {}) {
      return axios.delete<T>(url, config);
    },
  };
};

export default api(axiosInstance);

import axios, {AxiosRequestConfig} from 'axios';
import {getSession} from 'next-auth/react'
const api = axios.create({
  baseURL: 'https://flowery-ecommerce-api.herokuapp.com'
})

api.interceptors.request.use(async(config:AxiosRequestConfig) => {
  const session = await getSession();

  config.headers!.Authorization = `Bearer ${session?.jwt}`;
  return config
})

export default api;
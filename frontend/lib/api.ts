import axios, {AxiosRequestConfig} from 'axios';
import {getSession} from 'next-auth/react'
const api = axios.create({
  baseURL: process.env.API_URL
})

api.interceptors.request.use(async(config:AxiosRequestConfig) => {
  const session = await getSession();

  config.headers!.Authorization = `Bearer ${session?.jwt}`;
  return config
})

export default api;
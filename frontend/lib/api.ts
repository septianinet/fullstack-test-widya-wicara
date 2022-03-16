import axios, {AxiosRequestConfig} from 'axios';
import {getSession} from 'next-auth/react'
const api = axios.create({
  baseURL: "http://localhost:3010"
})

api.interceptors.request.use(async(config:AxiosRequestConfig) => {
  const session = await getSession();

  config.headers!.Authorization = `Bearer ${session?.jwt}`;
  return config
})

export default api;
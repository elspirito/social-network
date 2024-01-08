import { axiosInstance } from 'common/api/common.api'
import { LoginData } from 'common/types/auth.types'

export const authAPI = {
  login() {
    return axiosInstance.post<AuthResponseType>('/auth/login')
  },
  logout() {
    return axiosInstance.delete('/auth/login')
  },
  me() {
    return axiosInstance.get<AuthResponseType<LoginData>>('/auth/me')
  },
}

type AuthResponseType<T = {}> = {
  resultCode: number
  messages: string[]
  data: T
}

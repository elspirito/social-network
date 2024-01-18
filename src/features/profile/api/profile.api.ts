import { axiosInstance } from 'common/api/common.api'

export const profileAPI = {
  getUserProfile(userId: number) {
    return axiosInstance.get(`/profile/${userId}`)
  },
  getUserStatus(userId: number) {
    return axiosInstance.get(`/profile/status/${userId}`)
  },
  setUserStatus(status: string) {
    return axiosInstance.put(`/profile/status`)
  },
}

type ResponseType<T = {}> = {
  resultCode: number
  messages: string[]
  data: T
}

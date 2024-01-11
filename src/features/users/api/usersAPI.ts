import { axiosInstance } from 'common/api/common.api'
import { GetUsersResponseType } from 'common/types/users.types'

export const usersAPI = {
  fetchUsers(currentPage: number, pageSize: number) {
    return axiosInstance.get<GetUsersResponseType>(`/users?page=${currentPage}&count=${pageSize}`)
  },
  followUser(userId: number) {
    return axiosInstance.post<ResponseType>(`/follow/${userId}`)
  },
  unfollowUser(userId: number) {
    return axiosInstance.delete<ResponseType>(`/follow/${userId}`)
  },
}

type ResponseType<T = {}> = {
  resultCode: number
  messages: string[]
  data: T
}

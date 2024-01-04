import { axiosInstance } from 'common/api/common.api'
import { GetUsersResponseType } from 'common/types/users'

export const usersApi = {
  fetchUsers(currentPage: number, pageSize: number) {
    return axiosInstance.get<GetUsersResponseType>(`/users?page=${currentPage}&count=${pageSize}`)
  },
}

// type ResponseType<T = {}> = {
//   resultCode: number
//   messages: string[]
//   data: T
// }

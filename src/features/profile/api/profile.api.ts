import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  withCredentials: true,
  headers: {
    'API-KEY': '6cc44642-801e-40a5-8b58-0176dcd3d92b',
  },
})

export const profileApi = {
  getUserProfile(userId: number) {
    return axiosInstance.get(`/profile/2`)
  },
}

// type ResponseType<T = {}> = {
//   resultCode: number
//   messages: string[]
//   data: T
// }

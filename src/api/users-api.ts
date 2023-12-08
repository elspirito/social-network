import axios from "axios";
import {GetUsersResponseType, UserType} from "../types/users";


const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        'API-KEY': '6cc44642-801e-40a5-8b58-0176dcd3d92b'
    }
})

export const usersAPI = {
    fetchUsers(currentPage: number, pageSize: number) {
        return axiosInstance.get<GetUsersResponseType>(`/users?page=${currentPage}&count=${pageSize}`)
    }
}
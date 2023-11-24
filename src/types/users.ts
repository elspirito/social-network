import {setCurrentPageAC, setUsersAC} from "../store/actions/users";

export enum UsersActionsTypes {
    SET_USERS = 'SET_USERS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
}

type SetUsersACType = ReturnType<typeof setUsersAC>
type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>

export type UsersRootActionsType = SetUsersACType | SetCurrentPageACType

type UserPhotosType = {
    small: string,
    large: string
}
export type UserType = {
    name: string,
    id: number,
    uniqueUrlName: string,
    photos: UserPhotosType,
    status: string,
    followed: boolean
}
export type UsersStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
export type GetUsersResponseType = {
    error: string | null
    items: UserType[]
    totalCount: number
}

import {followUserAC, setCurrentPageAC, setLoadingStatusAC, setUsersAC} from "../store/actions/users";

export enum UsersActionsTypes {
    SET_USERS = 'SET_USERS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_LOADING_STATUS = 'SET_LOADING_STATUS',
    FOLLOW_USER = 'FOLLOW_USER',
}

type SetUsersACType = ReturnType<typeof setUsersAC>
type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>
type SetLoadingStatusACType = ReturnType<typeof setLoadingStatusAC>
type FollowUseerACType = ReturnType<typeof followUserAC>

export type UsersRootActionsType = SetUsersACType
    | SetCurrentPageACType
    | SetLoadingStatusACType
    | FollowUseerACType


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
    isLoading: boolean
}
export type GetUsersResponseType = {
    error: string | null
    items: UserType[]
    totalCount: number
}

import {fetchUsersAC} from "../store/actions/users";

export enum UsersActionsTypes {
    GET_USERS = 'GET_USERS'
}

type UsersACType = ReturnType<typeof fetchUsersAC>

export type UsersRootActionsType = UsersACType

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
export type GetUsersResponseType = {
    error: string | null
    items: UserType[]
    totalCount: number
}

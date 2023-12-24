import {
  followUserAC,
  getUserProfileAC,
  setCurrentPageAC,
  setLoadingStatusAC,
  setUsersAC
} from '../../features/users/model/users.actions';

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
type GetUserProfileACType = ReturnType<typeof getUserProfileAC>

export type UsersRootActionsType = SetUsersACType
  | SetCurrentPageACType
  | SetLoadingStatusACType
  | FollowUseerACType
  | GetUserProfileACType

type UserPhotosType = {
  small: string
  large: string
}
export type UserType = {
  name: string
  id: number
  uniqueUrlName: string
  photos: UserPhotosType
  status: string
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

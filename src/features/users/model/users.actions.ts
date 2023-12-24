import { UsersActionsTypes, UserType } from '../../../common/types/users'
import { usersApi } from '../api/users.api'
import { AppThunk } from '../../../app/store'
import { PostsActionsTypes } from '../../../common/types/posts'
import { Dispatch } from 'redux';

// Actions
export const setUsersAC = (users: UserType[], totalUserCount: number, pageSize: number) => {
  return {
    type: UsersActionsTypes.SET_USERS,
    users,
    totalUserCount,
    pageSize,
  } as const
}
export const setCurrentPageAC = (currentPage: number) => {
  return {
    type: UsersActionsTypes.SET_CURRENT_PAGE,
    currentPage,
  } as const
}
export const setLoadingStatusAC = (status: boolean) => {
  return {
    type: UsersActionsTypes.SET_LOADING_STATUS,
    status,
  } as const
}
export const followUserAC = (userId: number) => {
  return {
    type: UsersActionsTypes.FOLLOW_USER,
    userId,
  } as const
}
export const getUserProfileAC = (userId: number) => {
  return {
    type: PostsActionsTypes.GET_USER_PROFILE,
    payload: {
      userId,
    },
  }
}

//Thunks
export const setUsersTC =
  (currentPage: number, pageSize: number): AppThunk =>
  (dispatch: Dispatch) => {
    dispatch(setLoadingStatusAC(true))
    usersApi.fetchUsers(currentPage, pageSize).then((res) => {
      dispatch(setUsersAC(res.data.items, res.data.totalCount, pageSize))
      dispatch(setCurrentPageAC(currentPage))
      dispatch(setLoadingStatusAC(false))
    })
  }
export const getUserProfileTC = (userId: number):AppThunk => (dispatch: Dispatch) => {
  alert(userId)
}

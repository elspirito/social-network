import { UsersActionsTypes, UserType } from 'common/types/users.types'
import { usersAPI } from 'features/users/api/usersAPI'
import { AppThunk } from 'app/store'
import { Dispatch } from 'redux'

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

//Thunks
export const setUsersTC =
  (currentPage: number, pageSize: number): AppThunk =>
  (dispatch: Dispatch) => {
    dispatch(setLoadingStatusAC(true))
    usersAPI.fetchUsers(currentPage, pageSize).then((res) => {
      dispatch(setUsersAC(res.data.items, res.data.totalCount, pageSize))
      dispatch(setCurrentPageAC(currentPage))
      dispatch(setLoadingStatusAC(false))
    })
  }

export const followUserTC =
  (userId: number): AppThunk =>
  (dispatch: Dispatch) => {
    usersAPI.followUser(userId).then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(followUserAC(userId))
      } else {
        alert(res.data.messages[0])
      }
    })
  }
export const unfollowUserTC =
  (userId: number): AppThunk =>
  (dispatch: Dispatch) => {
    usersAPI.unfollowUser(userId).then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(followUserAC(userId))
      } else {
        alert(res.data.messages[0])
      }
    })
  }

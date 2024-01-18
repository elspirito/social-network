import { ProfileActionsTypes, UserProfile } from 'common/types/profile.types'
import { Dispatch } from 'redux'
import { profileAPI } from 'features/profile/api/profile.api'
import { AppThunk } from 'app/store'
import { setLoadingStatusAC } from 'features/users/model/users.actions'

// Actions
export const addPostAC = (postText: string) => {
  return {
    type: ProfileActionsTypes.ADD_POST,
    payload: {
      postText,
    },
  } as const
}
export const setUserProfileAC = (profile: UserProfile) => {
  return {
    type: ProfileActionsTypes.SET_USER_PROFILE,
    payload: {
      profile,
    },
  } as const
}
export const setUserStatusAC = (status: string) => {
  return {
    type: ProfileActionsTypes.SET_USER_STATUS,
    payload: {
      status,
    },
  } as const
}
export const updateUserStatusAC = (status: string) => {
  return {
    type: ProfileActionsTypes.UPDATE_USER_STATUS,
    payload: {
      status,
    },
  } as const
}

//Thunks
export const addPostTC = (postText: string) => (dispatch: Dispatch) => {
  dispatch(addPostAC(postText))
}
export const setUserProfileTC =
  (userId: number): AppThunk =>
  async (dispatch: Dispatch) => {
    dispatch(setLoadingStatusAC(true))
    const res = await profileAPI.getUserProfile(userId)
    dispatch(setUserProfileAC(res.data))
    dispatch(setLoadingStatusAC(false))
  }
export const setUserStatusTC = (userId: number) => async (dispatch: Dispatch) => {
  const res = await profileAPI.getUserStatus(userId)
  if (res.data) {
    dispatch(setUserStatusAC(res.data))
  } else {
    dispatch(setUserStatusAC('Что у вас нового?'))
  }
}
export const updateUserStatusTC = (status: string) => async (dispatch: Dispatch) => {
  const res = await profileAPI.updateUserStatus(status)
  if (res.data.resultCode === 0) {
    dispatch(updateUserStatusAC(status))
  }
}

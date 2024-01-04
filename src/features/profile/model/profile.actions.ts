import { ProfileActionsTypes, UserProfile } from 'common/types/profile'
import { Dispatch } from 'redux'
import { profileAPI } from 'features/profile/api/profile.api'
import { AppThunk } from 'app/store'
import { usersApi } from 'features/users/api/users.api'
import { setCurrentPageAC, setLoadingStatusAC, setUsersAC } from 'features/users/model/users.actions'

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

//Thunks
export const addPostTC = (postText: string) => (dispatch: Dispatch) => {
  dispatch(addPostAC(postText))
}

export const setUserProfileTC =
  (userId: number): AppThunk =>
  async (dispatch: Dispatch) => {
    dispatch(setLoadingStatusAC(true))
    profileAPI.getUserProfile(userId).then((res) => {
      dispatch(setUserProfileAC(res.data))
      dispatch(setLoadingStatusAC(false))
    })
  }

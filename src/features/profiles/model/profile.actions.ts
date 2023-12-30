import { ProfileActionsTypes, UserProfile } from 'common/types/profile'
import { Dispatch } from 'redux'

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

export const setUserProfileTC = (profile: UserProfile) => (dispatch: Dispatch) => {
  dispatch(setUserProfileAC(profile))
}

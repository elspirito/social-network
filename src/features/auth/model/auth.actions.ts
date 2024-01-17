import { AuthActionsTypes, LoginData } from 'common/types/auth.types'
import { Dispatch } from 'redux'
import { authAPI } from 'features/auth/api/auth.api'

export const checkMeAC = (data: LoginData, isLoggedIn: boolean) => {
  return {
    type: AuthActionsTypes.CHECK_ME,
    payload: {
      data,
      isLoggedIn,
    },
  } as const
}

export const fetchingLoginDataAC = (isFetching: boolean) => {
  return {
    type: AuthActionsTypes.FETCHING_LOGIN_DATA,
    payload: {
      isFetching,
    },
  } as const
}

export const checkMeTC = () => (dispatch: Dispatch) => {
  dispatch(fetchingLoginDataAC(true))
  authAPI.me().then((res) => {
    if (res.data.resultCode === 0) {
      dispatch(checkMeAC(res.data.data, true))
      dispatch(fetchingLoginDataAC(false))
    } else {
      dispatch(checkMeAC(res.data.data, false))
      dispatch(fetchingLoginDataAC(false))
    }
  })
}

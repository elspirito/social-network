import { AuthActionsTypes, LoginData } from 'common/types/auth.types'
import { Dispatch } from 'redux'
import { authAPI } from 'features/auth/api/auth.api'

export const checkMeAC = (data: LoginData) => {
  return {
    type: AuthActionsTypes.CHECK_ME,
    payload: {
      data,
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
    dispatch(checkMeAC(res.data.data))
    dispatch(fetchingLoginDataAC(false))
  })
}

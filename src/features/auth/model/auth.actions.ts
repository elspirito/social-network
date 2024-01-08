import { AuthActionsTypes, LoginData } from 'common/types/auth.types'
import { Dispatch } from 'redux'
import { authAPI } from 'features/auth/api/auth.api'

export const checkMeAC = (data: LoginData) => {
  return {
    type: AuthActionsTypes.CHECK_ME,
    payload: {
      data,
    },
  }
}

export const checkMeTC = () => (dispatch: Dispatch) => {
  authAPI.me().then((res) => {
    dispatch(checkMeAC(res.data.data))
  })
}

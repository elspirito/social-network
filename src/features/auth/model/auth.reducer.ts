import { AuthActionsTypes, AuthRootActionsType, IsMeData, LoginData } from 'common/types/auth.types'

const initState: LoginData & IsMeData = {
  id: null,
  email: null,
  login: null,
  isLoggedIn: false,
  isFetching: false,
}

export const authReducer = (state = initState, action: AuthRootActionsType) => {
  switch (action.type) {
    case AuthActionsTypes.CHECK_ME:
      return {
        ...state,
        ...action.payload.data,
        isLoggedIn: action.payload.isLoggedIn,
      }
    case AuthActionsTypes.FETCHING_LOGIN_DATA:
      return {
        ...state,
        isFetching: action.payload.isFetching,
      }
    default:
      return state
  }
}

import { AuthActionsTypes, AuthRootActionsType, LoginData } from 'common/types/auth.types'

const initState: LoginData = {
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
        id: action.payload.data.id,
        email: action.payload.data.email,
        login: action.payload.data.login,
        isLoggedIn: true,
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

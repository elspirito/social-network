import { AuthRootActionsType, LoginData } from 'common/types/auth.types'

const initState: LoginData = {
  id: null,
  email: null,
  login: null,
  isLoggedIn: false,
}

export const authReducer = (state = initState, action: AuthRootActionsType) => {
  switch (action.type) {
    case 'CHECK_ME':
      return {
        ...state,
        id: action.payload.data.id,
        email: action.payload.data.email,
        login: action.payload.data.login,
        isLoggedIn: true,
      }
    default:
      return state
  }
}

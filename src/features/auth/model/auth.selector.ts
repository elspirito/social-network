import { AppStateType } from 'app/store'

export const selectIsLoggedIn = (state: AppStateType) => state.authReducer.isLoggedIn

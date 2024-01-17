import { checkMeAC, fetchingLoginDataAC } from 'features/auth/model/auth.actions'

export enum AuthActionsTypes {
  CHECK_ME = 'CHECK_ME',
  FETCHING_LOGIN_DATA = 'FETCHING_LOGIN_DATA',
}

type CheckMeACType = ReturnType<typeof checkMeAC>
type FetchingLoginDataACType = ReturnType<typeof fetchingLoginDataAC>

export type AuthRootActionsType = CheckMeACType | FetchingLoginDataACType

export type LoginData = {
  id: number | null
  email: string | null
  login: string | null
}

export type IsMeData = {
  isLoggedIn: boolean
  isFetching: boolean
}

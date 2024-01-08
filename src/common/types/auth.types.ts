import { checkMeAC } from 'features/auth/model/auth.actions'

export enum AuthActionsTypes {
  CHECK_ME = 'CHECK_ME',
}

type CheckMeACType = ReturnType<typeof checkMeAC>

export type AuthRootActionsType = CheckMeACType

export type LoginData = {
  id: number | null
  email: string | null
  login: string | null
  isLoggedIn: boolean
}

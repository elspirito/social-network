import {
  addPostAC,
  setUserProfileAC,
  setUserStatusAC,
  updateUserStatusAC,
} from 'features/profile/model/profile.actions'

export enum ProfileActionsTypes {
  ADD_POST = 'ADD_POST',
  SET_USER_PROFILE = 'SET_USER_PROFILE',
  SET_USER_STATUS = 'SET_USER_STATUS',
  UPDATE_USER_STATUS = 'UPDATE_USER_STATUS',
}

type AddPostsACType = ReturnType<typeof addPostAC>
type SetUserProfileACType = ReturnType<typeof setUserProfileAC>
type SetUserStatusACType = ReturnType<typeof setUserStatusAC>
type UpdateUserStatusACType = ReturnType<typeof updateUserStatusAC>

export type ProfileRootActionsType =
  | AddPostsACType
  | SetUserProfileACType
  | SetUserStatusACType
  | UpdateUserStatusACType

export type UserProfile = {
  aboutMe: string
  contacts: UserProfileContacts
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  userId: number
  photos: UserProfilePhotos
}
export type UserProfileContacts = {
  facebook: string
  vk: string
  twitter: string
  instagram: string
  github: string
}
export type UserProfilePhotos = {
  small: string
  large: string
}

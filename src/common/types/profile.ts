import { addPostAC, setUserProfileAC } from 'features/profiles/model/profile.actions'

export enum ProfileActionsTypes {
  ADD_POST = 'ADD_POST',
  SET_USER_PROFILE = 'SET_USER_PROFILE',
}

type AddPostsACType = ReturnType<typeof addPostAC>
type SetUserProfileACType = ReturnType<typeof setUserProfileAC>

export type ProfileRootActionsType = AddPostsACType | SetUserProfileACType

export type PostType = {
  id: string
  postText: string
}

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

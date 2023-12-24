import { addPostAC } from '../../features/dialogs/model/posts.actions'

export enum PostsActionsTypes {
  ADD_POST = 'ADD_POST',
  GET_USER_PROFILE = 'GET_USER_PROFILE',
}

type PostsACType = ReturnType<typeof addPostAC>

export type PostsRootActionsType = PostsACType

export type PostType = {
  id: string
  postText: string
}

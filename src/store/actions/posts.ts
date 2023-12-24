import { PostsActionsTypes } from '../../types/posts'

export const addPostAC = (postText: string) => {
  return {
    type: PostsActionsTypes.ADD_POST,
    payload: {
      postText,
    },
  }
}

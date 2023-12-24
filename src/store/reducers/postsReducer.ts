import { v1 } from 'uuid'
import { PostsActionsTypes, PostsRootActionsType, PostType } from '../../types/posts'

const initState: PostType[] = [
  { id: v1(), postText: 'firstMessage' },
  { id: v1(), postText: 'secondMessage' },
  { id: v1(), postText: 'thirdMessage' },
]

export const postsReducer = (state = initState, action: PostsRootActionsType) => {
  switch (action.type) {
    case PostsActionsTypes.ADD_POST:
      return [{ id: v1(), postText: action.payload.postText }, ...state]
    default:
      return state
  }
}

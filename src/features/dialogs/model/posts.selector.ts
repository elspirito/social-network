import { AppStateType } from '../../../app/store'
import { PostType } from '../../../common/types/posts'

export const selectPosts = (state: AppStateType): PostType[] => state.postsReducer

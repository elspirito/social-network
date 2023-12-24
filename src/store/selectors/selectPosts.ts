import { AppStateType } from '../store'
import { PostType } from '../../types/posts'

export const selectPosts = (state: AppStateType): PostType[] => state.postsReducer

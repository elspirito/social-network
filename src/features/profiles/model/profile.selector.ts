import { AppStateType } from 'app/store'
import { PostType } from 'common/types/profile'

export const selectPosts = (state: AppStateType): PostType[] => state.profileReducer.posts

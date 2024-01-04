import { AppStateType } from 'app/store'
import { PostType } from 'common/types/messages'
import { UserProfile } from 'common/types/profile'

export const selectPosts = (state: AppStateType): PostType[] => state.profileReducer.posts
export const selectProfile = (state: AppStateType): UserProfile | null => state.profileReducer.profile

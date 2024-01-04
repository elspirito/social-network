import { AppStateType } from 'app/store'
import { PostType } from 'common/types/messages'
import { UserProfile } from 'common/types/profile'
import { useSelector } from 'react-redux'

export const selectPosts = (state: AppStateType): PostType[] => state.profileReducer.posts
export const selectProfile = (state: AppStateType): UserProfile | null => state.profileReducer.profile

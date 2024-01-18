import { AppStateType } from 'app/store'

export const selectPosts = (state: AppStateType) => state.profileReducer.posts
export const selectProfile = (state: AppStateType) => state.profileReducer.profile
export const selectStatus = (state: AppStateType) => state.profileReducer.status

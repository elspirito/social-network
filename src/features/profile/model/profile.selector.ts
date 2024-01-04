import { AppStateType } from 'app/store'

export const selectPosts = (state: AppStateType) => state.profileReducer.posts

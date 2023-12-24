import { AppStateType } from '../../../app/store'

export const usersSelector = (state: AppStateType) => state.usersReducer.users
export const selectUsersCurrentPage = (state: AppStateType) => state.usersReducer.currentPage
export const selectPageSize = (state: AppStateType) => state.usersReducer.pageSize
export const selectUserIsLoadingStatus = (state: AppStateType) => state.usersReducer.isLoading
export const selectUsersPagesCount = (state: AppStateType) =>
  Math.ceil(state.usersReducer.totalUsersCount / state.usersReducer.pageSize)

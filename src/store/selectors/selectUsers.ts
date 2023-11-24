import {AppStateType} from "../store";

export const selectUsers = (state: AppStateType) => state.usersReducer.users;
export const selectUsersCurrentPage = (state: AppStateType) => state.usersReducer.currentPage;
export const selectUsersPagesCount = (state: AppStateType) =>
    Math.ceil(state.usersReducer.totalUsersCount/state.usersReducer.pageSize)
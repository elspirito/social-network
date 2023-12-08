import {UsersActionsTypes, UserType} from "../../types/users";
import {usersAPI} from "../../api/users-api";
import {AppThunk} from "../store";

export const setUsersAC = (users: UserType[], totalUserCount: number) => {
    return {
        type: UsersActionsTypes.SET_USERS,
        users,
        totalUserCount
    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: UsersActionsTypes.SET_CURRENT_PAGE,
        currentPage
    } as const
}

export const setLoadingStatusAC = (status: boolean) => {
    return {
        type: UsersActionsTypes.SET_LOADING_STATUS,
        status
    } as const
}
export const setUsersTC = (currentPage: number): AppThunk => (dispatch) => {
    dispatch(setLoadingStatusAC(true))
    usersAPI.fetchUsers(currentPage)
        .then(res => {
            dispatch(setUsersAC(res.data.items, res.data.totalCount))
            dispatch(setCurrentPageAC(currentPage))
            dispatch(setLoadingStatusAC(false))
        })
}
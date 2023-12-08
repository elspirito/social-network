import {UsersActionsTypes, UsersRootActionsType, UsersStateType} from "../../types/users";

const initState: UsersStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false
}

export const usersReducer = (state = initState, action: UsersRootActionsType) => {
    switch (action.type) {
        case UsersActionsTypes.SET_USERS:
            return {
                ...state,
                users: action.users,
                totalUsersCount: action.totalUserCount
            }
        case UsersActionsTypes.SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case UsersActionsTypes.SET_LOADING_STATUS:
            return {
                ...state,
                isLoading: action.status
            }
        default:
            return state
    }
}
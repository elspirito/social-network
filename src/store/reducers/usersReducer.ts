import {UsersActionsTypes, UsersRootActionsType, UsersStateType} from "../../types/users";

const initState: UsersStateType = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1
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
        default:
            return state
    }
}
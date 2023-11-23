import {UsersRootActionsType, UserType} from "../../types/users";

const initState: UserType[] = []

export const usersReducer = (state = initState, action: UsersRootActionsType) => {
    switch (action.type) {
        case "GET_USERS":
            return action.users
        default:
            return state
    }
}
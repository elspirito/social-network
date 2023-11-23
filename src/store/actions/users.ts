import {UsersActionsTypes, UserType} from "../../types/users";
import {Dispatch} from "redux";
import {usersAPI} from "../../api/users-api";

export const fetchUsersAC = (users: UserType[]) => {
    return {
        type: UsersActionsTypes.GET_USERS,
        users
    }
}
export const fetchUsersTC = () => (dispatch: Dispatch) => {
    usersAPI.fetchUsers()
        .then(res => {
            dispatch(fetchUsersAC(res.data.items))
        })
}
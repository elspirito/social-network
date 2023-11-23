import {UsersActionsTypes, UserType} from "../../types/users";
import {Dispatch} from "redux";
import {usersAPI} from "../../api/users-api";
import {AppThunk} from "../store";

export const fetchUsersAC = (users: UserType[]) => {
    return {
        type: UsersActionsTypes.GET_USERS,
        users
    }
}
export const fetchUsersTC = ():AppThunk => (dispatch) => {
    usersAPI.fetchUsers()
        .then(res => {
            dispatch(fetchUsersAC(res.data.items))
        })
}
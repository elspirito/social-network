import {AppStateType} from "../store";
import {UserType} from "../../types/users";

export const selectUsers = (state: AppStateType): UserType[] => state.usersReducer;
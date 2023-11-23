import {AnyAction, applyMiddleware, combineReducers, createStore, Dispatch} from "redux";
import {dialogsReducer, friendsReducer, postsReducer, usersReducer} from "./reducers";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {UsersRootActionsType} from "../types/users";
import {useDispatch} from "react-redux";


export const rootReducer = combineReducers(
    {
        friendsReducer,
        postsReducer,
        dialogsReducer,
        usersReducer,
    }
)
export let store = createStore(rootReducer, applyMiddleware(thunk))

export type AppStateType = ReturnType<typeof rootReducer>

export type AppDispatchType = ThunkDispatch<AppStateType, unknown, AppCommonActionsType>
export type AppCommonActionsType = UsersRootActionsType


//@ts-ignore
window.store = store
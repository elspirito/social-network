import {combineReducers, createStore} from "redux";
import {dialogsReducer, friendsReducer, postsReducer} from "./reducers";




export const rootReducer = combineReducers(
    {
        friendsReducer,
        postsReducer,
        dialogsReducer
    }
)
export let store = createStore(rootReducer)

export type RootStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store
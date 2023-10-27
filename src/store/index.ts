import {combineReducers, createStore} from "redux";
import {friendsReducer, postReducer} from "./reducers";



export const rootReducer = combineReducers(
    {
        friendsReducer,
        postReducer
    }
)
export let store = createStore(rootReducer)

export type RootStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store
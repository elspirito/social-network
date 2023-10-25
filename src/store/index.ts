import {combineReducers, createStore} from "redux";
import {friendsReducer} from "./reducers/friendsReducer";



export const rootReducer = combineReducers(
    {
        friendsReducer,
    }
)
export let store = createStore(rootReducer)

export type RootStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store
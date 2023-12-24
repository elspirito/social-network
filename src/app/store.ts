import { AnyAction, applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { UsersRootActionsType } from '../common/types/users'
import { friendsReducer } from '../features/users/model/friends.reducer';
import { postsReducer } from '../features/dialogs/model/posts.reducer';
import { dialogsReducer } from '../features/dialogs/model/dialogs.reducer';
import { usersReducer } from '../features/users/model/users.reducer';

export const rootReducer = combineReducers({
  friendsReducer,
  postsReducer,
  dialogsReducer,
  usersReducer,
})
export let store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export type AppStateType = ReturnType<typeof rootReducer>

export type AppDispatchType = ThunkDispatch<AppStateType, unknown, AppCommonActionsType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AnyAction>

export type AppCommonActionsType = UsersRootActionsType

//@ts-ignore
window.store = store

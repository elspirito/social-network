import { AnyAction, applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { UsersRootActionsType } from 'common/types/users.types'
import { friendsReducer } from 'features/users/model/friends.reducer'
import { messagesReducer } from 'features/messages/model/messages.reducer'
import { usersReducer } from 'features/users/model/users.reducer'
import { profileReducer } from 'features/profile/model/profile.reducer'
import { ProfileRootActionsType } from 'common/types/profile.types'
import { authReducer } from 'features/auth/model/auth.reducer'
import { AuthRootActionsType } from 'common/types/auth.types'

export const rootReducer = combineReducers({
  friendsReducer,
  profileReducer,
  messagesReducer,
  usersReducer,
  authReducer,
})
export let store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export type AppStateType = ReturnType<typeof rootReducer>

export type AppDispatchType = ThunkDispatch<AppStateType, unknown, AppCommonActionsType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AnyAction>

export type AppCommonActionsType = UsersRootActionsType | ProfileRootActionsType | AuthRootActionsType

//@ts-ignore
window.store = store

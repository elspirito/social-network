import { AnyAction, applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import { dialogsReducer, friendsReducer, postsReducer, usersReducer } from './reducers';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { UsersRootActionsType } from '../types/users';

export const rootReducer = combineReducers({
  friendsReducer,
  postsReducer,
  dialogsReducer,
  usersReducer,
});
export let store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export type AppStateType = ReturnType<typeof rootReducer>;

export type AppDispatchType = ThunkDispatch<AppStateType, unknown, AppCommonActionsType>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AnyAction>;

export type AppCommonActionsType = UsersRootActionsType;

//@ts-ignore
window.store = store;

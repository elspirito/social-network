import { FriendType } from '../../types/friends';
import { AppStateType } from '../store';

export const selectFriends = (state: AppStateType): FriendType[] => state.friendsReducer;

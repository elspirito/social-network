import { FriendType } from '../../../common/types/friends'
import { AppStateType } from '../../../app/store'

export const selectFriends = (state: AppStateType): FriendType[] => state.friendsReducer

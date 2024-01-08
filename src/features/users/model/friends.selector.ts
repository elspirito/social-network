import { FriendType } from 'common/types/friends.types'
import { AppStateType } from 'app/store'

export const selectFriends = (state: AppStateType): FriendType[] => state.friendsReducer

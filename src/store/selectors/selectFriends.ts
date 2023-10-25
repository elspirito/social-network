import {FriendsStateType, FriendType} from "../../types/friends";
import {RootStateType} from "../index";

export const selectFriends = (state: RootStateType): FriendType[] => state.friendsReducer;

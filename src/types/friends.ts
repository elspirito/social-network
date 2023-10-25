
export type FriendType = {
    id: string
    userPic: string
    firstName: string
    lastName: string
    login: string
    isOnline: boolean
}

export type FriendsStateType = {
    friends: FriendType[]
}


import { v1 } from 'uuid'
import { ProfileActionsTypes, ProfileRootActionsType, UserProfile } from 'common/types/profile'
import { PostType } from 'common/types/messages'

const initState: ProfileStateType = {
  posts: [
    { id: v1(), messageText: 'firstMessage' },
    { id: v1(), messageText: 'secondMessage' },
    { id: v1(), messageText: 'thirdMessage' },
    { id: v1(), messageText: 'test' },
  ],
  profile: null,
}

export const profileReducer = (state = initState, action: ProfileRootActionsType): ProfileStateType => {
  switch (action.type) {
    case ProfileActionsTypes.ADD_POST:
      return { ...state, posts: [{ id: v1(), messageText: action.payload.postText }, ...state.posts] }
    case ProfileActionsTypes.SET_USER_PROFILE:
      return { ...state, profile: action.payload.profile }
    default:
      return state
  }
}

type ProfileStateType = {
  posts: PostType[]
  profile: UserProfile | null
}

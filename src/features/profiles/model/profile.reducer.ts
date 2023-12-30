import { v1 } from 'uuid'
import { ProfileActionsTypes, ProfileRootActionsType } from 'common/types/profile'

const initState = {
  posts: [
    { id: v1(), postText: 'firstMessage' },
    { id: v1(), postText: 'secondMessage' },
    { id: v1(), postText: 'thirdMessage' },
  ],
  newPostText: 'test',
  profile: null,
}

export const profileReducer = (state = initState, action: ProfileRootActionsType) => {
  switch (action.type) {
    case ProfileActionsTypes.ADD_POST:
      return { ...state, posts: [{ id: v1(), postText: action.payload.postText }, ...state.posts] }
    // case ProfileActionsTypes.SET_USER_PROFILE:
    //   return { ...state, profile: action.payload.profile }
    default:
      return state
  }
}

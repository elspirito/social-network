import { v1 } from 'uuid'
import { MessagesActionsTypes, MessagesRootType, PostType } from 'common/types/messages.types'

const initState: PostType[] = [
  { id: v1(), messageText: 'haha' },
  { id: v1(), messageText: 'lol' },
  { id: v1(), messageText: 'kek' },
]

export const messagesReducer = (state = initState, action: MessagesRootType) => {
  switch (action.type) {
    case MessagesActionsTypes.SEND_MESSAGE:
      return [{ id: v1(), messageText: action.payload.messageText }, ...state]
    default:
      return state
  }
}

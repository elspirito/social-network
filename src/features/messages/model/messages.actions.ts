import { MessagesActionsTypes } from 'common/types/messages.types'

export const sendMessageAC = (messageText: string) => {
  return {
    type: MessagesActionsTypes.SEND_MESSAGE,
    payload: {
      messageText,
    },
  }
}

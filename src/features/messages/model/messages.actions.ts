import { MessagesActionsTypes } from 'common/types/messages'

export const sendMessageAC = (messageText: string) => {
  return {
    type: MessagesActionsTypes.SEND_MESSAGE,
    payload: {
      messageText,
    },
  }
}

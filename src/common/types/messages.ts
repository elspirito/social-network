import { sendMessageAC } from 'features/messages/model/messages.actions'

export enum MessagesActionsTypes {
  SEND_MESSAGE = 'SEND_MESSAGE',
}

type SendMessageACType = ReturnType<typeof sendMessageAC>

export type MessagesRootType = SendMessageACType

export type PostType = {
  id: string
  messageText: string
}

import { dialogsAC } from '../../features/messages/model/dialogs.actions'

export enum DialogsActionsTypes {
  SEND_MESSAGE = 'SEND_MESSAGE',
}

type DialogsACType = ReturnType<typeof dialogsAC>

export type DialogsRootType = DialogsACType

export type DialogType = {
  id: string
  dialogText: string
}

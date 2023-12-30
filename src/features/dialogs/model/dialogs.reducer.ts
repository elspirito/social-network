import { v1 } from 'uuid'
import { DialogsActionsTypes, DialogsRootType, DialogType } from 'common/types/dialogs'

const initState: DialogType[] = [
  { id: v1(), dialogText: 'haha' },
  { id: v1(), dialogText: 'lol' },
  { id: v1(), dialogText: 'kek' },
]

export const dialogsReducer = (state = initState, action: DialogsRootType) => {
  switch (action.type) {
    case DialogsActionsTypes.SEND_MESSAGE:
      return [{ id: v1(), dialogText: action.payload.dialogText }, ...state]
    default:
      return state
  }
}

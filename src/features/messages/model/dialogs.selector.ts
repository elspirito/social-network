import { AppStateType } from '../../../app/store'
import { DialogType } from '../../../common/types/dialogs'

export const selectDialogs = (state: AppStateType): DialogType[] => state.dialogsReducer

import { AppStateType } from 'app/store'
import { PostType } from 'common/types/messages.types'

export const selectMessages = (state: AppStateType): PostType[] => state.messagesReducer

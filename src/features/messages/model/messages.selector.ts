import { AppStateType } from 'app/store'
import { PostType } from 'common/types/messages'

export const selectMessages = (state: AppStateType): PostType[] => state.messagesReducer

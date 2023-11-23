import {DialogsActionsTypes} from "../../types/dialogs";

export const dialogsAC = (dialogText: string) => {
    return {
        type: DialogsActionsTypes.SEND_MESSAGE,
        payload: {
            dialogText
        }
    }
};
import {AppStateType} from "../store";
import {DialogType} from "../../types/dialogs";

export const selectDialogs = (state: AppStateType): DialogType[] => state.dialogsReducer;

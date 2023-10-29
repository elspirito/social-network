import {RootStateType} from "../index";
import {DialogType} from "../../types/dialogs";

export const selectDialogs = (state: RootStateType): DialogType[] => state.dialogsReducer;

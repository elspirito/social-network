import {postsActionsTypes} from "../../types/posts";

export const addPostAC = (postText: string) => {
    return {
        type: postsActionsTypes.ADD_POST,
        payload: {
            postText
        }
    }
};
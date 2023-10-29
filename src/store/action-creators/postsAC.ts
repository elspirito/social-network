import {PostsActionsTypes} from "../../types/posts";

export const postsAC = (postText: string) => {
    return {
        type: PostsActionsTypes.ADD_POST,
        payload: {
            postText
        }
    }
};
import {v1} from "uuid";
import {postsActionsTypes, PostsACTypes, PostType} from "../../types/posts";

const initState: PostType[] = [
    {id: v1(), postText: 'firstMessage'},
    {id: v1(), postText: 'secondMessage'},
    {id: v1(), postText: 'thirdMessage'},
]

export const postReducer = (state = initState, action: PostsACTypes) => {
    switch (action.type) {
        case postsActionsTypes.ADD_POST:
            return [{id: v1(), postText: action.payload.postText}, ...state]
        default:
            return state
    }
}
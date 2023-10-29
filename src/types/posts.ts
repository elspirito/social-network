import {postsAC} from "../store/action-creators/postsAC";

export enum PostsActionsTypes {
    ADD_POST  = 'ADD_POST'
}

type PostsACType = ReturnType<typeof postsAC>

export type PostsRootType = PostsACType

export type PostType = {
    id: string
    postText: string
}

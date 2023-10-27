import {addPostAC} from "../store/action-creators/addPostAC";

export enum postsActionsTypes {
    ADD_POST  = 'ADD_POST'
}

type AddPostACType = ReturnType<typeof addPostAC>

export type PostsACTypes = AddPostACType

export type PostType = {
    id: string
    postText: string
}

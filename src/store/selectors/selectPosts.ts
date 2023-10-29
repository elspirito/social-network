import {RootStateType} from "../index";
import {PostType} from "../../types/posts";

export const selectPosts = (state: RootStateType): PostType[] => state.postsReducer;

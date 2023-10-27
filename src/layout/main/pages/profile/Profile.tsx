import React from 'react';
import styled from "styled-components";
import {ProfileHeader} from "./profileHeader/ProfileHeader";
import {PostSendForm} from "./postWritingForm/PostSendForm";
import {Post} from "./post/Post";
import {ProfileAside} from "./profileAside/ProfileAside";
import {useDispatch, useSelector} from "react-redux";
import {selectPosts} from "../../../../store/selectors/selectPosts";
import {addPostAC} from "../../../../store/action-creators/addPostAC";


export const Profile: React.FC = () => {

    const posts = useSelector(selectPosts)
    const dispatch = useDispatch()

    const addPost = (text: string) => {
        dispatch(addPostAC(text))
    }

    return (
        <StyledProfile>
            <ProfileContent>
                <ProfileHeader/>
                <PostSendForm addItem={addPost}/>
                {
                    posts.map(p => <Post key={p.id} postText={p.postText}/>)
                }
            </ProfileContent>
            <ProfileAside/>
        </StyledProfile>
    );
};

const StyledProfile = styled.div`
  display: grid;
  grid-template-columns: 1fr 20vw;
  grid-template-rows: 100px auto;
  gap: 24px;
  grid-template-areas: 
    "p p r"
`
const ProfileContent = styled.div`
  grid-area: p;
  display: flex;
  flex-direction: column;
  gap: 24px;
`
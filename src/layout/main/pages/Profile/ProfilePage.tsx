import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ProfileHeader } from './profileHeader/ProfileHeader';
import { SendForm } from '../../../../components/sendForm/SendForm';
import { Post } from './post/Post';
import { ProfileAside } from './profileAside/ProfileAside';
import { useDispatch, useSelector } from 'react-redux';
import { selectPosts } from '../../../../store/selectors';
import { addPostAC } from '../../../../store/actions/posts';
import { getUserProfileTC } from '../../../../store/actions/users';
import { useAppDispatch } from '../../../../hooks/customHooks';

export const ProfilePage: React.FC = () => {
  const posts = useSelector(selectPosts)
  const dispatch = useAppDispatch()

  const addPost = (text: string) => {
    // dispatch(addPostAC(text))
  }

  useEffect(() => {
    dispatch(getUserProfileTC(2))
  }, [])

  return (
    <StyledProfile>
      <ProfileContent>
        <ProfileHeader />
        <SendForm addItem={addPost} />
        {posts.map((p) => (
          <Post key={p.id} postText={p.postText} />
        ))}
      </ProfileContent>
      <ProfileAside />
    </StyledProfile>
  )
}

const StyledProfile = styled.div`
  display: grid;
  grid-template-columns: 1fr 20vw;
  grid-template-rows: 100px auto;
  gap: 24px;
  grid-template-areas: 'p p r';
`
const ProfileContent = styled.div`
  grid-area: p;
  display: flex;
  flex-direction: column;
  gap: 24px;
`

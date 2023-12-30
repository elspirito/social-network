import React, { useEffect } from 'react'
import styled from 'styled-components'
import { ProfileHeader } from './profileHeader/ProfileHeader'
import { SendForm } from '../../../../components/SendForm/SendForm'
import { Post } from './post/Post'
import { ProfileAside } from './profileAside/ProfileAside'
import { useSelector } from 'react-redux'
import { getUserProfileTC } from '../../../../../features/users/model/users.actions'
import { useAppDispatch } from '../../../../hooks/customHooks'
import { selectPosts } from '../../../../../features/profiles/model/profile.selector'
import { addPostAC, addPostTC } from 'features/profiles/model/profile.actions'
import { PostType } from 'common/types/profile'

export const ProfilePage: React.FC = () => {
  const posts = useSelector(selectPosts)
  const dispatch = useAppDispatch()

  const addPost = (text: string) => {
    dispatch(addPostTC(text))
  }

  useEffect(() => {
    dispatch(getUserProfileTC(2))
  }, [dispatch])

  return (
    <StyledProfile>
      <ProfileContent>
        <ProfileHeader />
        <SendForm addItem={addPost} />
        {posts.map((p: PostType) => (
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

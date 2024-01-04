import React, { useEffect } from 'react'
import styled from 'styled-components'
import { ProfileHeader } from 'features/profile/ui/ProfileHeader/ProfileHeader'
import { SendForm } from 'common/components/SendForm/SendForm'
import { Post } from 'features/profile/ui/Post/Post'
import { ProfileAside } from 'features/profile/ui/ProfileAside/ProfileAside'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'common/hooks/customHooks'
import { selectPosts, selectProfile } from 'features/profile/model/profile.selector'
import { addPostTC, setUserProfileTC } from 'features/profile/model/profile.actions'
import { PostType } from 'common/types/messages'
import { Spin } from 'antd'
import { UserType } from 'common/types/users'
import { UserItem } from 'common/components/UserItem/UserItem'
import { selectUserIsLoadingStatus } from 'features/users/model/users.selector'

export const ProfilePage: React.FC = () => {
  const dispatch = useAppDispatch()
  const posts = useSelector(selectPosts)
  const profile = useSelector(selectProfile)
  const userIsLoadingStatus = useSelector(selectUserIsLoadingStatus)

  console.log(profile)

  const addPost = (text: string) => {
    dispatch(addPostTC(text))
  }

  useEffect(() => {
    dispatch(setUserProfileTC(2))
  }, [])

  return (
    <StyledProfile>
      {userIsLoadingStatus ? (
        <Spin style={{ padding: '100px' }} />
      ) : (
        <ProfileContent>
          <ProfileHeader name={profile?.fullName} avatar={profile?.photos.small} />
          <SendForm addItem={addPost} />
          {posts && posts.map((p: PostType) => <Post key={p.id} postText={p.messageText} />)}
        </ProfileContent>
      )}

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

import React from 'react'
import styled from 'styled-components'
import { FriendItem } from 'common/components/FriendItem/FriendItem'
import { useSelector } from 'react-redux'
import { selectFriends } from 'features/users/model/friends.selector'

export const FriendsBar: React.FC = () => {
  const friends = useSelector(selectFriends)

  return (
    <StyledFriends>
      <h3>Friends (42 online)</h3>
      <ul>
        {friends.map((f) => {
          return (
            <FriendItem
              key={f.id}
              firstName={f.firstName}
              lastName={f.lastName}
              login={f.login}
              isOnline={f.isOnline}
              icon={'sms'}
            />
          )
        })}
      </ul>
    </StyledFriends>
  )
}

const StyledFriends = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`

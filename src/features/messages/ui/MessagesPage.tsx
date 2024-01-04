import React from 'react'
import styled from 'styled-components'
import { DialogWindow } from 'features/messages/ui/DialogWindow/DialogWindow'
import { FriendItem } from 'common/components/FriendItem/FriendItem'
import { Search } from 'common/components/Search/Search'
import { useSelector } from 'react-redux'
import { selectFriends } from 'features/users/model/friends.selector'

export const MessagesPage: React.FC = () => {
  const friends = useSelector(selectFriends)

  return (
    <StyledDialogs>
      <DialogsList>
        <Search />
        {friends.map((f) => {
          return (
            <FriendItem
              key={f.id}
              firstName={f.firstName}
              lastName={f.lastName}
              login={f.login}
              isOnline={f.isOnline}
            />
          )
        })}
      </DialogsList>
      <DialogWindow />
    </StyledDialogs>
  )
}

const StyledDialogs = styled.div`
  background: #fff;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
`
const DialogsList = styled.div`
  border-right: 1px solid #eee;
  padding: 24px;
`

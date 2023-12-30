import React from 'react'
import styled from 'styled-components'
import { DialogWindow } from './dialogWindow/DialogWindow'
import { FriendItem } from '../../../../components/friendItem/FriendItem'
import { Search } from '../../../../components/Search/Search'
import { useSelector } from 'react-redux'
import { selectFriends } from '../../../../../features/users/model/friends.selector'

export const DialogsPage: React.FC = () => {
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

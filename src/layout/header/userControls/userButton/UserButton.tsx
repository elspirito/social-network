import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../../../components/icon/Icon'
import avatar_0004 from '../../../../assets/img/avatars/avatar_0004.webp'
import Avatar from 'antd/lib/avatar/avatar'

export const UserButton = () => {
  return (
    <StyledUserButton>
      <Avatar src={avatar_0004} />
      <Icon iconId={'caretDown'} width={'16'} height={'16'} />
    </StyledUserButton>
  )
}

const StyledUserButton = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

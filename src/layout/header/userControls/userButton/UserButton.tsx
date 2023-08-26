import React from 'react';
import styled from 'styled-components';
import {Icon} from '../../../../components/icon/Icon';
import {Avatar} from '../../../../components/avatar/Avatar';
import avatar_0004 from '../../../../img/avatars/avatar_0004.webp'

export const UserButton = () => {
    return (
        <StyledUserButton>
            <Avatar src={avatar_0004}/>
            <Icon iconId={'caretDown'} width={'16'} height={'16'}/>
        </StyledUserButton>
    );
};

const StyledUserButton = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`
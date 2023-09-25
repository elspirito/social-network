import React from 'react';
import styled from 'styled-components';

type AvatarPropsType = {
    src: string
    borderRadius?: string
}

export const UserPic: React.FC<AvatarPropsType> = (props) => {
    return (
        <StyledAvatar src={props.src} borderRadius={props.borderRadius}/>
    );
};

const StyledAvatar = styled.img<AvatarPropsType>`
  width: 48px;
  height: 48px;
  border-radius: ${props => props.borderRadius || '50%'};
  flex-shrink: 0;
`
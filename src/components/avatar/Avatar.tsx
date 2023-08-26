import React from 'react';
import styled from 'styled-components';

type AvatarPropsType = {
    src: string
}

export const Avatar: React.FC<AvatarPropsType> = (props) => {
    return (
        <StyledAvatar src={props.src}/>
    );
};

const StyledAvatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`
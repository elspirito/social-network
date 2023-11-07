import React, {ReactNode} from 'react';
import styled from "styled-components";

type PropsType = {
    postText: string
    children?: ReactNode;
}

export const Post: React.FC<PropsType> = ({postText,children}) => {
    return (
        <StyledPost>
            {postText}
        </StyledPost>
    );
};

const StyledPost = styled.div`
  padding: 24px;
  background: #fff;
  border-radius: 12px;
`
import React, {ReactNode} from 'react';
import styled from "styled-components";
import {UserPic} from "../../../../../components/userPic/UserPic";
import pic from '../../../../../assets/img/avatars/avatar_0004.webp'

type PropsType = {
    dialogText: string
    children?: ReactNode;
}

export const DialogMessage: React.FC<PropsType> = ({dialogText,children}) => {
    return (
        <StyledDialogMessage>
            <UserPic src={pic}/>
            {dialogText}
        </StyledDialogMessage>
    );
};

const StyledDialogMessage = styled.div`
  padding: 24px;
  background: #fff;
  border-radius: 12px;
`
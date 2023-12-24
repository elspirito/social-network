import React, { ReactNode } from 'react';
import styled from 'styled-components';
import pic from '../../../../../assets/img/avatars/avatar_0004.webp';
import Avatar from 'antd/lib/avatar/avatar';

type PropsType = {
  dialogText: string;
  children?: ReactNode;
};

export const DialogMessage: React.FC<PropsType> = ({ dialogText, children }) => {
  return (
    <StyledDialogMessage>
      <Avatar src={pic} />
      {dialogText}
    </StyledDialogMessage>
  );
};

const StyledDialogMessage = styled.div`
  padding: 24px;
  background: #fff;
  border-radius: 12px;
`;

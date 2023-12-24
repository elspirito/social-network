import React from 'react';
import styled from 'styled-components';
import { SendForm } from '../../../../../components/sendForm/SendForm';
import { selectDialogs } from '../../../../../store/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { DialogMessage } from '../dialogMessage/DialogMessage';
import { dialogsAC } from '../../../../../store/actions/dialogs';

export const DialogWindow: React.FC = () => {
  const messages = useSelector(selectDialogs);
  const dispatch = useDispatch();
  const sendMessageHandler = (text: string) => {
    dispatch(dialogsAC(text));
  };

  return (
    <StyledDialogWindow>
      <DialogScreen>
        {messages.map((m) => (
          <DialogMessage dialogText={m.dialogText} key={m.id} />
        ))}
      </DialogScreen>

      <DialogSendForm>
        <SendForm addItem={sendMessageHandler} />
      </DialogSendForm>
    </StyledDialogWindow>
  );
};

const StyledDialogWindow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  width: 100%;
`;
const DialogScreen = styled.div`
  flex-grow: inherit;
  background-color: #fafafa;
  height: 100%;
  width: 100%;
`;
const DialogSendForm = styled.div`
  border-top: 1px solid #333333;
  width: 100%;
`;

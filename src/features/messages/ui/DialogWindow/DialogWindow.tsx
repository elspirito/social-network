import React from 'react'
import styled from 'styled-components'
import { SendForm } from 'common/components/SendForm/SendForm'
import { useDispatch, useSelector } from 'react-redux'
import { DialogMessage } from 'features/messages/ui/DialogMessage/DialogMessage'
import { sendMessageAC } from 'features/messages/model/messages.actions'
import { selectMessages } from 'features/messages/model/messages.selector'

export const DialogWindow: React.FC = () => {
  const messages = useSelector(selectMessages)
  const dispatch = useDispatch()
  const sendMessageHandler = (text: string) => {
    dispatch(sendMessageAC(text))
  }

  return (
    <StyledDialogWindow>
      <DialogScreen>
        {messages.map((m) => (
          <DialogMessage dialogText={m.messageText} key={m.id} />
        ))}
      </DialogScreen>

      <DialogSendForm>
        <SendForm addItem={sendMessageHandler} />
      </DialogSendForm>
    </StyledDialogWindow>
  )
}

const StyledDialogWindow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  width: 100%;
`
const DialogScreen = styled.div`
  flex-grow: inherit;
  background-color: #fafafa;
  height: 100%;
  width: 100%;
`
const DialogSendForm = styled.div`
  border-top: 1px solid #333333;
  width: 100%;
`

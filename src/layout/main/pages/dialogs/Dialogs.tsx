import React from 'react';
import styled from "styled-components";
import {DialogItem} from "./dialogItem/DialogItem";
import {DialogWindow} from "./dialogWindow/DialogWindow";

export const Dialogs = () => {
    return (
        <StyledDialogs>
            <DialogsList>
                <DialogItem/>
                <DialogItem/>
                <DialogItem/>
                <DialogItem/>
                <DialogItem/>
            </DialogsList>
            <DialogWindow/>
        </StyledDialogs>
    );
};

const StyledDialogs = styled.div`
  padding: 24px;
  background: #fff;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
`
const DialogsList = styled.div`
border-right: 1px solid #eee;
  padding: 24px;
`
import React, {ChangeEvent, ChangeEventHandler, useState} from 'react';
import styled from "styled-components";
import {Button} from "../../../../../components/button/Button";
import {Input} from "../../../../../components/input/Input";

type PropsType = {
    addItem: (inputValue: string) => void
}

export const PostSendForm: React.FC<PropsType> = ({addItem}) => {

    const [inputValue, setInputValue] = useState('')

    const onChangeHandler = (text: string) => {
        setInputValue(text)
    }
    const onKeyDownHandler = () => {
        addItem(inputValue)
        setInputValue('')
    }
    const onClickHandler = () => {
        addItem(inputValue)
        setInputValue('')
    }

    return (
        <StyledPostWritingForm>
            <Input placeholder={'POST HERE'} onChange={onChangeHandler} value={inputValue} onKeyDown={onKeyDownHandler}/>
            <Button name={'Отправить'} onClick={onClickHandler}/>
        </StyledPostWritingForm>
    );
};

const StyledPostWritingForm = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: row;
  gap: 8px;
`



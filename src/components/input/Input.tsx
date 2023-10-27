import React, {ChangeEvent, ChangeEventHandler} from 'react';
import styled from "styled-components";

type PropsType = {
    placeholder: string
    onChange: (text: string) => void
    value: string
}

export const Input: React.FC<PropsType> = (
    {
        placeholder,
        onChange,
        value
    }
) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.currentTarget.value)
    }

    return (
        <StyledInput
            placeholder={placeholder}
            value={value}
            onChange={onChangeHandler}
        />
    );
};

const StyledInput = styled.input`

`
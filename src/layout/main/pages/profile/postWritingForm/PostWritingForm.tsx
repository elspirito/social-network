import React from 'react';
import styled from "styled-components";

export const PostWritingForm = () => {
    const textarea = document.querySelector('textarea');
    if (textarea) {
        textarea.addEventListener('input', () => {
            textarea.style.height = 'auto';
            textarea.style.height = textarea.scrollHeight + 'px';
        });
    }


    return (
        <StyledPostWritingForm>
            <textarea />
        </StyledPostWritingForm>
    );
};

const StyledPostWritingForm = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 24px;
  
`



import React, {FC} from 'react';
import styled, {css} from "styled-components";
import {useAppDispatch} from "../../hooks/customHooks";
import {setCurrentPageAC, setUsersTC} from "../../store/actions/users";

type PropsType = {
    pagesCount: number
    currentPage: number
}
export const Pagination: FC<PropsType> = ({pagesCount, currentPage}) => {

    console.log(pagesCount)
    const pages = []
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }

    const dispatch = useAppDispatch()

    const onClickHandler = (p: number) => {
        dispatch(setUsersTC(p))
    }

    return (
        <StyledPagination>
            {
                pages.map(p => {
                    return <PageLink
                        key={p}
                        onClick={() => onClickHandler(p)}
                        $active={p === currentPage}>
                        {p}
                    </PageLink>
                })
            }
        </StyledPagination>
    )
}

const StyledPagination = styled.div`
  display: flex;
  gap: 4px;

`
const PageLink = styled.a<{ $active?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 4px;
  padding: 8px;
  width: 40px;
  height: 40px;
  cursor: pointer;

  &:hover {
    background-color: #dddddd;
  }

  &:active {
    background-color: #1B79E5;
    color: #fff;
  }

  ${props => props.$active && css<{ $active?: boolean }>`
    background-color: #1B79E5;
    color: #fff;
  `};

`
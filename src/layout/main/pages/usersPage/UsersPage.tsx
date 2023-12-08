import React, {useEffect} from 'react';
import styled from "styled-components";
import {setUsersTC} from "../../../../store/actions/users";
import {
    selectUserIsLoadingStatus,
    selectUsers,
    selectUsersCurrentPage,
    selectUsersPagesCount
} from "../../../../store/selectors/selectUsers";
import {useAppDispatch, useAppSelector} from "../../../../hooks/customHooks";
import {Pagination} from "../../../../components/pagination/Pagination";
import {UserItem} from "../../../../components/userItem/UserItem";
import {Spin} from "antd";

export const UsersPage = () => {
    const dispatch = useAppDispatch()

    const users = useAppSelector(selectUsers)
    const usersPagesCount = useAppSelector(selectUsersPagesCount)
    const usersCurrentPage = useAppSelector(selectUsersCurrentPage)
    const userIsLoadingStatus = useAppSelector(selectUserIsLoadingStatus)

    useEffect(() => {
        dispatch(setUsersTC(usersCurrentPage))
    }, []);

    return (
        <StyledUsersPage>
                <Pagination pagesCount={usersPagesCount} currentPage={usersCurrentPage}/>
                {
                    userIsLoadingStatus
                        ? <Spin style={{padding: '100px'}}/>
                        : users.map(
                        user =>
                            <UserItem key={user.id} user={user}/>
                    )
                }
            </StyledUsersPage>
    );
};

const StyledUsersPage = styled.div`
  border-radius: 12px;
  background-color: #fff;
  padding: 24px;
`
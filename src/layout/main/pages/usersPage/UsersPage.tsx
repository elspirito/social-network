import React, {FC, useEffect} from 'react';
import styled from "styled-components";
import {setUsersTC} from "../../../../store/actions/users";
import {
    selectUserIsLoadingStatus,
    selectUsers,
    selectUsersCurrentPage,
    selectUsersPagesCount
} from "../../../../store/selectors/selectUsers";
import {useAppDispatch, useAppSelector} from "../../../../hooks/customHooks";
import {UserItem} from "../../../../components/userItem/UserItem";
import {Pagination, Spin} from "antd";

export const UsersPage: FC = () => {
    const dispatch = useAppDispatch()

    const users = useAppSelector(selectUsers)
    const usersPagesCount = useAppSelector(selectUsersPagesCount)
    const usersCurrentPage = useAppSelector(selectUsersCurrentPage)
    const userIsLoadingStatus = useAppSelector(selectUserIsLoadingStatus)

    useEffect(() => {
        dispatch(setUsersTC(usersCurrentPage))
    }, []);

    const onChangePaginationHandler = (usersCurrentPage: number) =>{
        dispatch(setUsersTC(usersCurrentPage))
    }

    return (
        <StyledUsersPage>
            {/*<Pagination pagesCount={usersPagesCount} currentPage={usersCurrentPage}/>*/}
            <Pagination defaultCurrent={usersCurrentPage} total={usersPagesCount} onChange={onChangePaginationHandler}/>
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
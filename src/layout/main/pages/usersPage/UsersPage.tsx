import React, {useEffect} from 'react';
import styled from "styled-components";
import {setUsersTC} from "../../../../store/actions/users";
import {selectUsers, selectUsersCurrentPage, selectUsersPagesCount} from "../../../../store/selectors/selectUsers";
import {useAppDispatch, useAppSelector} from "../../../../hooks/customHooks";
import {Pagination} from "../../../../components/pagination/Pagination";
import {UserItem} from "../../../../components/userItem/UserItem";

export const UsersPage = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setUsersTC(usersCurrentPage))
    }, []);

    const users = useAppSelector(selectUsers)
    const usersPagesCount = useAppSelector(selectUsersPagesCount)
    const usersCurrentPage = useAppSelector(selectUsersCurrentPage)

    return (
        <StyledUserPage>
            <Pagination pagesCount={usersPagesCount} currentPage={usersCurrentPage}/>
            {
                users.map(u => <UserItem key={u.id}
                                         user={u}
                    />

                    // return <div key={u.id}>
                    //     <span>Name: {u.name}</span>
                    //     <span>Status: {u.status}</span>
                    //     <span>Followed: {u.followed}</span>
                    //     <img src={u.photos.small}/>
                    //     <span>Url Name: {u.uniqueUrlName}</span>
                    // </div>
                )
            }
        </StyledUserPage>
    );
};

const StyledUserPage = styled.div`
  border-radius: 12px;
  background-color: #fff;
  padding: 24px;
`
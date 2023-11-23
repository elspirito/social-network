import React, {useEffect} from 'react';
import styled from "styled-components";
import {fetchUsersTC} from "../../../../store/actions/users";
import {selectUsers} from "../../../../store/selectors/selectUsers";
import {useAppDispatch, useAppSelector} from "../../../../hooks/customHooks";

export const UsersPage = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchUsersTC())
    }, []);

    const users = useAppSelector(selectUsers)
    console.log(users)
    return (
        <StyledUserPage>
            {
                users.map(u => {
                    return <div key={u.id}>
                        <span>Name: {u.name}</span>
                        <span>Status: {u.status}</span>
                        <span>Followed: {u.followed}</span>
                        <img src={u.photos.small}/>
                        <span>Url Name: {u.uniqueUrlName}</span>
                    </div>
                })
            }
        </StyledUserPage>
    );
};

const StyledUserPage = styled.div`
  border-radius: 12px;
  background-color: #fff;
  padding: 24px;
`
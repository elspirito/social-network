import React, { FC } from 'react';
import styled from 'styled-components';
import { UserType } from '../../types/users';
import Avatar from 'antd/lib/avatar/avatar';
import { useAppDispatch } from '../../hooks/customHooks';
import { followUserAC } from '../../store/actions/users';
import { NavLink } from 'react-router-dom';

type PropsType = {
  user: UserType;
};

export const UserItem: FC<PropsType> = ({ user }) => {
  const dispatch = useAppDispatch();

  const onClickHandler = (userId: number) => {
    dispatch(followUserAC(userId));
  };

  return (
    <StyledUserItem>
      <NavLink to={`/profile:${user.id}`}>
        <Avatar icon={`${user.name[0].toUpperCase()}`} size={'large'} src={user.photos.small} />
        <UserName>
          <h5>{user.name}</h5>
          <Status>{user.status}</Status>
        </UserName>
      </NavLink>

      <button onClick={() => onClickHandler(user.id)}>{user.followed ? 'Unfollow' : 'Follow'}</button>

      <span>Url Name: {user.uniqueUrlName}</span>
    </StyledUserItem>
  );
};

const StyledUserItem = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 8px;
`;
const Status = styled.small`
  color: #999;
`;
const UserName = styled.div`
  display: flex;
`;

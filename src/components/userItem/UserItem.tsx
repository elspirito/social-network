import React, {FC} from 'react';
import styled from "styled-components";
import {UserType} from "../../types/users";
import {UserPic} from "../userPic/UserPic";
import Avatar from "antd/lib/avatar/avatar";

type PropsType = {
    user: UserType
}

export const UserItem: FC<PropsType> = ({user}) => {
    return (
        <StyledUserItem>
            {/*<UserPic src={user.photos.small}/>*/}
            <Avatar icon={`${user.name[0].toUpperCase()}`} size={"large"} src={user.photos.small} />
            <div>
                <div>{user.name}</div>
                <Status>{user.status}</Status>
                <UrlName></UrlName>
            </div>


            <button>{user.followed ? 'Follow' : 'Unfollow'}</button>

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
`
const Status = styled.small`
  color: #999;
`
const UrlName = styled.small`
  color: #999;
`
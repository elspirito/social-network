import React from 'react';
import styled from 'styled-components';
import {FriendLink} from './friendLink/FriendLink';
import avatar_0004 from '../../../../../../img/avatars/avatar_0004.webp'


const friends = [
    {id: 1, avatar: avatar_0004, firstName: 'Лариса', lastName: 'Невская', isOnline: true},
    {id: 2, avatar: avatar_0004, firstName: 'Павел', lastName: 'Черепанов', isOnline: true},
    {id: 3, avatar: avatar_0004, firstName: 'Иван', lastName: 'Герасимович', isOnline: true},
    {id: 4, avatar: avatar_0004, firstName: 'Лидия', lastName: 'Лескова', isOnline: false},
    {id: 5, avatar: avatar_0004, firstName: 'Аркадий', lastName: 'Мишнев', isOnline: false},
    {id: 6, avatar: avatar_0004, firstName: 'Максим', lastName: 'Некрасов', isOnline: true},
    {id: 7, avatar: avatar_0004, firstName: 'Варвара', lastName: 'Рассказова', isOnline: false}
]

export const Friends: React.FC = () => {
    return (
        <StyledFriends>
            <h3>Friends (42 online)</h3>
            <ul>
                <FriendLink isOnline={true}/>
                <FriendLink isOnline={true}/>
                <FriendLink isOnline={false}/>
                <FriendLink isOnline={false}/>
                <FriendLink isOnline={false}/>
            </ul>
        </StyledFriends>
    );
};

const StyledFriends = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`
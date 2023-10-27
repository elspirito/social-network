import {v1} from "uuid";
import avatar_0004 from "../../assets/img/avatars/avatar_0004.webp";
import {FriendType} from "../../types/friends";

const initState: FriendType[] = [
    {id: v1(), userPic: avatar_0004, firstName: 'Лариса', lastName: 'Невская', login: '@larisa', isOnline: true},
    {id: v1(), userPic: avatar_0004, firstName: 'Павел', lastName: 'Черепанов', login: '@pavel', isOnline: true},
    {id: v1(), userPic: avatar_0004, firstName: 'Иван', lastName: 'Герасимович', login: '@ivan', isOnline: true},
    {id: v1(), userPic: avatar_0004, firstName: 'Лидия', lastName: 'Лескова', login: '@lidia', isOnline: false},
    {id: v1(), userPic: avatar_0004, firstName: 'Аркадий', lastName: 'Мишнев', login: '@arkadiy', isOnline: false},
    {id: v1(), userPic: avatar_0004, firstName: 'Максим', lastName: 'Некрасов', login: '@maksim', isOnline: true},
    {id: v1(), userPic: avatar_0004, firstName: 'Варвара', lastName: 'Рассказова', login: '@varvara', isOnline: false}
]

export const friendsReducer = (state = initState, action: any) => {
    switch (action.type) {
        default:
            return state
    }
}
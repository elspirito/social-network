import avatar_0004 from "../img/avatars/avatar_0004.webp";
import {v1} from "uuid";

export type StateType = {
    friends: FriendType[]
}
export type FriendType = {
    id: string
    userPic: string
    firstName: string
    lastName: string
    login: string
    isOnline: boolean
}
export const state = {
    friends: [
        {id: v1(), userPic: avatar_0004, firstName: 'Лариса', lastName: 'Невская', login: '@larisa', isOnline: true},
        {id: v1(), userPic: avatar_0004, firstName: 'Павел', lastName: 'Черепанов', login: '@pavel', isOnline: true},
        {id: v1(), userPic: avatar_0004, firstName: 'Иван', lastName: 'Герасимович', login: '@ivan', isOnline: true},
        {id: v1(), userPic: avatar_0004, firstName: 'Лидия', lastName: 'Лескова', login: '@lidia', isOnline: false},
        {id: v1(), userPic: avatar_0004, firstName: 'Аркадий', lastName: 'Мишнев', login: '@arkadiy', isOnline: false},
        {id: v1(), userPic: avatar_0004, firstName: 'Максим', lastName: 'Некрасов', login: '@maksim', isOnline: true},
        {id: v1(), userPic: avatar_0004, firstName: 'Варвара', lastName: 'Рассказова', login: '@varvara', isOnline: false}
    ]
}
import { UsersActionsTypes, UserType } from '../../types/users';
import { usersAPI } from '../../api/users-api';
import { AppThunk } from '../store';

// Actions
export const setUsersAC = (users: UserType[], totalUserCount: number, pageSize: number) => {
  return {
    type: UsersActionsTypes.SET_USERS,
    users,
    totalUserCount,
    pageSize,
  } as const;
};
export const setCurrentPageAC = (currentPage: number) => {
  return {
    type: UsersActionsTypes.SET_CURRENT_PAGE,
    currentPage,
  } as const;
};
export const setLoadingStatusAC = (status: boolean) => {
  return {
    type: UsersActionsTypes.SET_LOADING_STATUS,
    status,
  } as const;
};
export const followUserAC = (userId: number) => {
  return {
    type: UsersActionsTypes.FOLLOW_USER,
    userId,
  } as const;
};

//Thunks
export const setUsersTC =
  (currentPage: number, pageSize: number): AppThunk =>
  (dispatch) => {
    dispatch(setLoadingStatusAC(true));
    usersAPI.fetchUsers(currentPage, pageSize).then((res) => {
      dispatch(setUsersAC(res.data.items, res.data.totalCount, pageSize));
      dispatch(setCurrentPageAC(currentPage));
      dispatch(setLoadingStatusAC(false));
    });
  };

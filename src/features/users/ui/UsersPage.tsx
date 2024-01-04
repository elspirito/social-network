import React, { FC, useEffect } from 'react'
import styled from 'styled-components'
import { setUsersTC } from 'features/users/model/users.actions'
import {
  selectPageSize,
  selectUserIsLoadingStatus,
  selectUsersCurrentPage,
  selectUsersPagesCount,
  usersSelector,
} from 'features/users/model/users.selector'
import { useAppDispatch, useAppSelector } from 'common/hooks/customHooks'
import { UserItem } from 'common/components/UserItem/UserItem'
import { Pagination, Spin } from 'antd'
import { UserType } from 'common/types/users'

export const UsersPage: FC = () => {
  const dispatch = useAppDispatch()

  const users = useAppSelector(usersSelector)
  const usersPagesCount = useAppSelector(selectUsersPagesCount)
  const pageSize = useAppSelector(selectPageSize)
  const usersCurrentPage = useAppSelector(selectUsersCurrentPage)
  const userIsLoadingStatus = useAppSelector(selectUserIsLoadingStatus)

  useEffect(() => {
    dispatch(setUsersTC(usersCurrentPage, pageSize))
  }, [dispatch, pageSize, usersCurrentPage])

  const onChangePaginationHandler = (usersCurrentPage: number, pageSize: number) => {
    dispatch(setUsersTC(usersCurrentPage, pageSize))
  }

  return (
    <StyledUsersPage>
      <Pagination defaultCurrent={usersCurrentPage} total={usersPagesCount} onChange={onChangePaginationHandler} />
      {userIsLoadingStatus ? (
        <Spin style={{ padding: '100px' }} />
      ) : (
        users.map((user: UserType) => <UserItem key={user.id} user={user} />)
      )}
    </StyledUsersPage>
  )
}

const StyledUsersPage = styled.div`
  border-radius: 12px;
  background-color: #fff;
  padding: 24px;
`

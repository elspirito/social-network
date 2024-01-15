import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from 'features/auth/model/auth.selector'

export const PrivateRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)

  return isLoggedIn ? <Outlet /> : <Navigate to={'/login'} />
}

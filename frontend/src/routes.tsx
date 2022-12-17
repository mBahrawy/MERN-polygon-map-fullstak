import { Navigate, useRoutes } from 'react-router-dom'
import { lazy } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { AppState } from './core/interfaces/AppState'
const AppOutlet = lazy(() => import('@/componenets/AppOutlet/AppOutlet.component'))
const Map = lazy(() => import('@/pages/Map/Map.component'))
const Login = lazy(() => import('@/pages/Login/Login.component'))
const Users = lazy(() => import('@/pages/Users/Users.component'))
const NotFound = lazy(() => import('@/pages/NotFound/NotFound.component'))

const Routes = () => {
  const { userData } = useSelector((state: AppState) => state.auth)
  const isAuth = !!userData
  const routes = useRoutes([
    {
      path: '/',
      element: <AppOutlet />,
      children: [
        {
          path: '',
          element: <Navigate to={'login'} />,
        },
        {
          path: 'login',
          element: !isAuth ? <Login /> : <Navigate to="/map" />,
        },
        {
          path: 'users',
          element: isAuth ? <Users /> : <Navigate to="/login" />,
        },
        {
          path: 'map',
          element: isAuth ? <Map /> : <Navigate to="/login" />,
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
  ])

  return routes
}

export default Routes

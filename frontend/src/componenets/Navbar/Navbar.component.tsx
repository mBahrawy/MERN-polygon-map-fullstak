import Container from 'react-bootstrap/Container'
import { Navbar, Nav } from 'react-bootstrap'
import { Button } from '@mui/material'
import { logoutAction } from '@/core/store/slices/auth-slice'
import { AppDispatch } from '@/core/store/store'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppState } from '@/core/interfaces/AppState'

const Header = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { userData } = useSelector((state: AppState) => state.auth)
  const isAuth = !!userData

  const navigate = useNavigate()
  const handleLogout = () => {
    dispatch(logoutAction())
    navigate('/login')
  }

  return (
    <Navbar bg='light' variant='light'>
      <Container>
        <Nav className='me-auto'>
          {isAuth && <NavLink className="btn mx-1"  to='/users'>Users</NavLink>}
          {!isAuth && <NavLink className="btn mx-1"  to='/login'>Login page</NavLink>}
          {isAuth && <NavLink className="btn mx-1"  to='/map'>Map</NavLink>}
        </Nav>
        {isAuth && (
          <Button onClick={handleLogout} variant='contained' size='small'>
            Logout
          </Button>
        )}
      </Container>
    </Navbar>
  )
}

export default Header

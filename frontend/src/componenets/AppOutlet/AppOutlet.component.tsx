import Container from './AppOutlet.style'
import { Outlet } from 'react-router-dom'
import Header from './../Navbar/Navbar.component';

function AppOutlet() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  )
}

export default AppOutlet

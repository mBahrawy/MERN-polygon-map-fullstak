import { AppState } from '@/core/interfaces/AppState'
import { useSelector } from 'react-redux'
import Container from './Users.style'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { User } from '@/core/interfaces/Auth'

function Users() {
  const { usersList } = useSelector((state: AppState) => state.auth)

  return (
    <Container>
      <div className='container'>
        <div className='row'>
          <div className='col-12 mt-5'>
            <h5 className='mb-5'>Users list</h5>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell><b>User email</b></TableCell>
                    <TableCell align='right'><b>User password</b></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {usersList.map((user, index) => (
                    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component='th' scope='row'>
                        {user.email}
                      </TableCell>
                      <TableCell align='right'> {user.password}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Users

import { BrowserRouter as Router } from 'react-router-dom'
import { Suspense } from 'react'
import { ToastContainer } from 'react-toastify'
import Loader from '@/componenets/Loader/Loader.component'
import Routes from '@/routes'

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Loader id='app-loader' />
      <ToastContainer position='top-right' autoClose={3500} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <Router>
        <Routes />
      </Router>
    </Suspense>
  )
}

export default App

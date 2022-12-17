import Container from './NotFound.style'

function NotFound() {

  return (
    <Container>
      <div className='container'>
        <div className='row'>
          <div className='col-12 mt-5'>
            <h3 className='mb-3 mt-5 text-center'>404, page not found</h3>
            <p className='mb-1 text-center'>Sorry, the page that you wanted is not found.</p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default NotFound

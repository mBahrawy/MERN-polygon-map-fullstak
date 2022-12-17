import Container from './Loader.style'
import loader from '@/assets/images/loader.svg'


const Loader = ({id = ''}) => {
  return (
    <Container id={id}>
        <img src={loader} />
    </Container>
  )
}

export default Loader
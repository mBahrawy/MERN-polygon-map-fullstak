import { useEffect, useState } from 'react'
import { AppDispatch } from '@/core/store/store'
import { Button, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import Container from './Login.style'
import { Auth, User } from '@/core/interfaces/Auth'
import { AppState } from '@/core/interfaces/AppState'
import { EMAIL_REGEX } from '@/core/helpers/regex'
import { useNavigate } from 'react-router-dom'
import { loginAction } from '@/core/store/slices/auth-slice'

function Login() {
  const navigate = useNavigate()

  const dispatch = useDispatch<AppDispatch>()
  const { errorMessage } = useSelector((state: AppState) => state.auth)

  // For email validation
  const [email, setEmail] = useState<string>('')
  const [isValidEmail, setIsValidEmail] = useState<boolean | null>(null)
  const [isNotFoundEmail, setIsNotFoundEmail] = useState<boolean | null>(null)
  const [emailErrorMessege, setEmailErrorMessege] = useState<string>('')
  const [isTouchedEmail, setIsTouchedEmail] = useState<boolean>(false)

  // For password validation
  const [password, setPassword] = useState<string>('')
  const [isValidPassword, setIsValidPassword] = useState<boolean | null>(null)
  const [PasswordErrorMessege, setPasswordErrorMessege] = useState<string>('')
  const [isTouchedPassword, setIsTouchedPassword] = useState<boolean>(false)

  // For total form validation
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  const login = (userData: User) => {
    dispatch(loginAction(userData)).then((result) => {
      const authData = result.payload as Auth
      authData.userData && navigate('/map')
    })
  }

  const validateEmailhandler = (value): boolean => {
    setEmail(value)
    !isTouchedEmail && setIsTouchedEmail(true)

    if (!value.trim().toLowerCase().length) {
      setEmailErrorMessege('Please enter email address.')
      setIsValidEmail(false)
      return false
    }

    if (!value.match(EMAIL_REGEX)) {
      setEmailErrorMessege('Email address is not correct.')
      setIsValidEmail(false)
      return false
    }

    setEmailErrorMessege('')
    setIsValidEmail(true)
    return true
  }

  const validatePasswordhandler = (value): boolean => {
    setPassword(value)
    !isTouchedPassword && setIsTouchedPassword(true)

    if (!value.trim().length) {
      setPasswordErrorMessege('Please enter your password.')
      setIsValidPassword(false)
      return false
    }

    setPasswordErrorMessege('')
    setIsValidPassword(true)
    return true
  }

  const handleShubmit = e => {
    const isValid = isValidEmail && isValidPassword
    !isSubmitted && setIsSubmitted(true)
    validateEmailhandler(email)
    validatePasswordhandler(password)
    
    isValid &&
      login({
        email,
        password,
      })
  }

  const hasEmailError = (): boolean => {
    return (!isValidEmail || isNotFoundEmail) && isSubmitted && isTouchedEmail
  }
  const hasPasswordError = (): boolean => {
    return !isValidPassword && isSubmitted && isTouchedPassword
  }

  return (
    <Container>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <div className='card mt-5'>
                <div className='card-header'>
                  <h6>Login form</h6>
                </div>
                <div className='card-body px-3'>
                  <TextField
                    onChange={e => validateEmailhandler(e.target.value)}
                    size='small'
                    className='mb-3'
                    id='outlined-basic'
                    label='Email'
                    variant='outlined'
                    helperText={hasEmailError() && emailErrorMessege}
                    error={hasEmailError()}
                    fullWidth
                    value={email}
                  />
                  <TextField
                    type="password"
                    size='small'
                    onChange={e => validatePasswordhandler(e.target.value)}
                    helperText={hasPasswordError() && PasswordErrorMessege}
                    error={hasPasswordError()}
                    id='outlined-basic'
                    label='Password'
                    variant='outlined'
                    fullWidth
                    value={password}
                  />
                </div>
                <div className='card-footer d-flex justify-content-end'>
                  <Button variant='contained' size='small' onClick={handleShubmit}>
                    Login
                  </Button>
                </div>
            </div>
            <p className='text-danger text-center text-bold mt-2'>{errorMessage}</p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Login

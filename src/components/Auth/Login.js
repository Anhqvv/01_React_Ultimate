import { useState } from 'react'
import './Login.scss'
import { useNavigate } from 'react-router-dom'
import { postLogin } from '../sevices/apiService'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { DoLogin } from '../../redux/action/UserAction'
import { ImSpinner9 } from 'react-icons/im'

const Login = props => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  //State
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const validateEmail = email => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

  const handleLogin = async () => {
    const isValidateEmail = validateEmail(email)
    if (!isValidateEmail) {
      toast.error('Invalid email')
      return
    }
    if (!password) {
      toast.error('Inavalid password')
      return
    }
    setIsLoading(true)
    const res = await postLogin(email, password)
    if (res && res.EC === 0) {
      dispatch(DoLogin(res))
      toast.success(res.EM)
      setIsLoading(false)
      // navigate('/')
    } else {
      toast.error(res.EM)
      setIsLoading(false)
    }
  }

  const handleSingup = () => {
    navigate('/register')
  }

  const handleGoHomepage = () => {
    navigate('/')
  }

  return (
    <div className='login-container '>
      <div className='header'>
        <span>Don't have an account yet?</span>
        <button
          className='btn btn-outline-dark btn-signup mx-3'
          onClick={() => handleSingup()}
        >
          Sign up
        </button>
      </div>
      <div className='logo'>Typeform</div>
      <div className='form-content col-3 mx-auto'>
        <h4 className='form-title'>Hello, who’s this?</h4>
        <div className='form-group'>
          <label className='form-label'>Email</label>
          <input
            className='form-control'
            type={'email'}
            value={email}
            placeholder='Please enter your Email...'
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label className='form-label'>Password</label>
          <input
            className='form-control'
            type={'password'}
            value={password}
            placeholder='Please enter your Password...'
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <a href='#!'>Forgot password?</a>
        <button
          className='btn-handle-login'
          onClick={() => handleLogin()}
          disabled={isLoading}
        >
          { isLoading &&<ImSpinner9 className='loader-icon' />}
          <span>Login To Typeform</span>
        </button>
        <div className='text-center go-back' onClick={() => handleGoHomepage()}>
          <span>&#60;&#60;Go to Homepage</span>
        </div>
      </div>
    </div>
  )
}

export default Login

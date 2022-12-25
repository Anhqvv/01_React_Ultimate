import { useState } from 'react'
import './Register.scss'
import { useNavigate } from 'react-router-dom'
import { postRegister } from '../sevices/apiService'
import { toast } from 'react-toastify'
import { VscEye, VscEyeClosed } from 'react-icons/vsc'

const Register = props => {
  const navigate = useNavigate()
  //State
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [isShowPassword, setIsShowPassword] = useState(false)

  const handleRegister = async () => {
    const isValidateEmail = validateEmail(email)
    if (!isValidateEmail) {
      toast.error('Invalid email')
      return
    }
    if (!password) {
      toast.error('Inavalid password')
      return
    }
    const res = await postRegister(email, password, username)
    if (res && res.EC === 0) {
      navigate('/login')
      toast.success(res.EM)
    }
    console.log('Checking postregister', res)
  }

  const handleGoHomepage = () => {
    navigate('/')
  }

  const validateEmail = email => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

  return (
    <div className='register-container '>
      <div className='header'>
        <span>Don't have an account yet?</span>
        <button
          className='btn btn-outline-dark btn-signup mx-3'
          onClick={() => navigate('/login')}
        >
          Sign in
        </button>
      </div>
      <div className='logo'>Typeform</div>
      <div className='form-content col-3 mx-auto'>
        <h4 className='form-title'>Sign up and come on in</h4>
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
        <div className='form-group register-password'>
          <label className='form-label'>Password</label>
          <input
            className='form-control'
            type={isShowPassword ? 'text' : 'password'}
            value={password}
            placeholder='Please enter your Password...'
            onChange={e => setPassword(e.target.value)}
          />
          {isShowPassword ? (
            <span className='icon-eye' onClick={() => setIsShowPassword(false)}>
              <VscEye />
            </span>
          ) : (
            <span className='icon-eye' onClick={() => setIsShowPassword(true)}>
              <VscEyeClosed />
            </span>
          )}
        </div>
        <div className='form-group'>
          <label className='form-label'>Username</label>
          <input
            className='form-control'
            type={'text'}
            value={username}
            placeholder='Please enter your username...'
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <a href='#'>Forgot password?</a>
        <button className='btn btn-dark p-2' onClick={() => handleRegister()}>
          Register To Typeform
        </button>
        <div className='text-center go-back' onClick={() => handleGoHomepage()}>
          <span>&#60;&#60;Go to Homepage</span>
        </div>
      </div>
    </div>
  )
}

export default Register

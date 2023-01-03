import videoHomePage from '../../assets/video-homepage.mp4'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated)
  const navigate = useNavigate()

  return (
    <div>
      <video autoPlay muted loop>
        <source src={videoHomePage} type='video/mp4' />
      </video>
      <div className='homepage-content'>
        <h1 className='title'>There's a better way to ask</h1>
        <p className='desc'>
          You don't want to make a boring form. And your audience won't answer
          one. Create a typeform instead—and make everyone happy.
        </p>
        {isAuthenticated === true ? (
          <button className='btn btn-dark' onClick={() => navigate('/users')}>
            Doing Quiz Now
          </button>
        ) : (
          <button className='btn btn-dark' onClick={() => navigate('/login')}>
            Get started - it's free
          </button>
        )}
      </div>
    </div>
  )
}

export default HomePage

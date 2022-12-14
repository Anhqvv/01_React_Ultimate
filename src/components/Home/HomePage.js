import videoHomePage from '../../assets/video-homepage.mp4'

const HomePage = () => {
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
        <button className='btn btn-dark'>Get started - it's free</button>
      </div>
    </div>
  )
}

export default HomePage

import './App.scss'
import { useDispatch, useSelector } from 'react-redux'
import Header from './components/Header/Header'

const App = () => {
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()

  return (
    <div className='App'>
      <Header />
      
    </div>
  )
}

export default App

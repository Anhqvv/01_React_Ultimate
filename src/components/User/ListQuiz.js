import { getQuizByUser } from '../sevices/apiService'
import { useEffect, useState } from 'react'
import './ListQuiz.scss'
import { useNavigate } from 'react-router-dom'
const ListQuiz = props => {
  const navigate = useNavigate()
  const [arrQuiz, setArrQuiz] = useState([])
  useEffect(() => {
    getQuizData()
  }, [])
  const getQuizData = async () => {
    let res = await getQuizByUser()

    setArrQuiz(res.DT)
  }
  console.log('arrQuiz:', arrQuiz)
  return (
    <div className='list-quiz-container container'>
      {arrQuiz &&
        arrQuiz.length > 0 &&
        arrQuiz.map((quiz, index) => {
          return (
            <div
              key={quiz.id}
              className='card  my-3'
              style={{ width: '18rem' }}
            >
              <img
                className='card-img-top'
                src={`data:image/png;base64,${quiz.image}`}
                alt='Card image cap'
              />
              <div className='card-body'>
                <h5 className='card-title'>Quiz-{quiz.id}</h5>
                <p className='card-text'>{quiz.description}</p>
                <button className='btn btn-primary' onClick={ () => navigate(`/quiz/${quiz.id}`)}>Start Now</button>
              </div>
            </div>
          )
        })}
      {arrQuiz && arrQuiz.length === 0 && <div>You don't have any Quiz</div>}
    </div>
  )
}

export default ListQuiz

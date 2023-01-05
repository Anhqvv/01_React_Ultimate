import { useParams, useLocation } from 'react-router-dom'
import { getQuizData } from '../sevices/apiService'
import { useEffect } from 'react'
import _ from 'lodash'
import './DetailQuiz.scss'

const DetailQuiz = () => {
  const params = useParams()
  const location = useLocation()
  const quizTilte = location?.state?.quizTilte
  console.log('quizTilte:', quizTilte)
  const quizId = params.id
  useEffect(() => {
    fetchQuestions()
  }, [quizId])

  const fetchQuestions = async () => {
    const res = await getQuizData(quizId)
    // console.log('>>> getQuizData res', res.DT)
    if (res && res.EC === 0) {
      let raw = res.DT
      let questionDescription,
        image = null
      let data = _.chain(raw)
        .groupBy('id')
        .map((value, key) => {
          let answers = []
          value.forEach((item, index) => {
            if (index === 0) {
              questionDescription = item.description
              image = item.image
            }
            answers.push(item.answers)
          })
          return { questonsId: key, answers, questionDescription, image }
        })
        .value()
      console.log('data groupBy: ', data)
    }
  }
  return (
    <div className='detail-quiz-container'>
      <div className='left-container'>
        <div className='title'>{quizTilte}</div>
        <hr />
        <img />
        <div className='question-content'>
          <div className='question'>Question 1: What are you doing?</div>
          <div className='answer'>
            <div className='answer-child'>A.Doing homework</div>
            <div className='answer-child'>B.Doing homework</div>
            <div className='answer-child'>C.Doing homework</div>
          </div>
        </div>
        <div className='footer'>
          <button className='btn btn-secondary'>Back</button>
          <button className='btn btn-primary'>Next</button>
        </div>
      </div>
      <div className='right-container'>right-container</div>
    </div>
  )
}

export default DetailQuiz

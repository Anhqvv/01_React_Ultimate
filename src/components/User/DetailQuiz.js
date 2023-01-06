import { useParams, useLocation } from 'react-router-dom'
import { getQuizData } from '../sevices/apiService'
import { useEffect } from 'react'
import _ from 'lodash'
import './DetailQuiz.scss'
import Question from './Question'
import { useState } from 'react'

const DetailQuiz = () => {
  const [dataQuiz, setDataQuiz] = useState([])
  const [index, setIndex] = useState(0)

  const params = useParams()
  const location = useLocation()
  const quizTilte = location?.state?.quizTilte
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
          return { questionsId: key, answers, questionDescription, image }
        })
        .value()
      setDataQuiz(data)
    }
  }

  const handleBack = () => {
    if (index - 1 < 0) {
      return
    }
    setIndex(index - 1)
  }
  const handleNext = () => {
    if (index + 1 === dataQuiz.length) {
      return
    }
    setIndex(index + 1)
  }
  console.log('>>> Checking index = ', index)
  return (
    <div className='detail-quiz-container'>
      <div className='left-container'>
        <div className='title'>{quizTilte}</div>
        <hr />
        <div className='question-content'>
          <Question
            dataQuiz={dataQuiz && dataQuiz.length > 0 && dataQuiz[index]}
            index={index}
          />
        </div>
        <div className='footer'>
          {+index === 0 ? (
            <button
              className='btn btn-secondary'
              onClick={() => handleBack()}
              disabled
            >
              Back
            </button>
          ) : (
            <button className='btn btn-secondary' onClick={() => handleBack()}>
              Back
            </button>
          )}
          {+index == dataQuiz.length - 1 ? (
            <button
              className='btn btn-primary'
              onClick={() => handleNext()}
              disabled
            >
              Next
            </button>
          ) : (
            <button className='btn btn-primary' onClick={() => handleNext()}>
              Next
            </button>
          )}
        </div>
      </div>
      <div className='right-container'>right-container</div>
    </div>
  )
}

export default DetailQuiz

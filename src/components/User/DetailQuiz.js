import { useParams, useLocation } from 'react-router-dom'
import { getQuizData, postSubmitQuiz } from '../sevices/apiService'
import { useEffect } from 'react'
import _ from 'lodash'
import './DetailQuiz.scss'
import Question from './Question'
import { useState } from 'react'
import ModalResult from './ModalResult'

const DetailQuiz = () => {
  //show Modal
  const [isShowModalResult, setIsShowModalResult] = useState(false)
  const [dataResult, setDataResult] = useState({})
  //
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
            item.answers.isSelected = false
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
  //Checkbox
  const handleCheckboxFather = (answerId, questionId) => {
    let dataQuizClone = _.cloneDeep(dataQuiz)

    let question = dataQuizClone.find(item => +item.questionsId === +questionId)
    if (question && question.answers) {
      let answer = question.answers.map(item => {
        if (+item.id === +answerId) {
          item.isSelected = !item.isSelected
        }
        return item
      })
      question.answers = answer
    }

    let currIndex = dataQuizClone.findIndex(
      item => +item.questionsId === +questionId
    )
    if (currIndex > -1) {
      dataQuizClone[currIndex] = question
      setDataQuiz(dataQuizClone)
    }
  }
  const handleFinish = async () => {
    let payload = {
      quizId: +quizId,
      answers: []
    }
    let answers = []
    if (dataQuiz && dataQuiz.length > 0) {
      dataQuiz.forEach(question => {
        let questionId = +question.questionsId
        let userAnswerId = []
        question.answers.forEach(answer => {
          if (answer.isSelected === true) {
            userAnswerId.push(answer.id)
          }
        })
        answers.push({
          questionId: questionId,
          userAnswerId: userAnswerId
        })
      })
      payload.answers = answers
      //Submit api
      console.log('payload to submit', payload)
      let res = await postSubmitQuiz(payload)
      if (res && res.EC === 0) {
        setIsShowModalResult(true)
        setDataResult({
          countCorrect: res.DT.countCorrect,
          countTotal: res.DT.countTotal,
          quizData: res.DT.quizData

        })
      } else {
        alert('data Wrong')
      }
    }
  }
  return (
    <div className='detail-quiz-container'>
      <div className='left-container'>
        <div className='title'>{quizTilte}</div>
        <hr />
        <div className='question-content'>
          <Question
            dataQuiz={dataQuiz && dataQuiz.length > 0 && dataQuiz[index]}
            index={index}
            handleCheckboxFather={handleCheckboxFather}
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
          {+index === dataQuiz.length - 1 ? (
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
          <button className='btn btn-warning' onClick={() => handleFinish()}>
            Finish
          </button>
        </div>
      </div>
      <div className='right-container'>right-container</div>
      <ModalResult
        show={isShowModalResult}
        setShow={setIsShowModalResult}
        dataResult={dataResult}
      />
    </div>
  )
}

export default DetailQuiz

import { useParams } from 'react-router-dom'
import { getQuizData } from '../sevices/apiService'
import { useEffect } from 'react'

const DetailQuiz = () => {
    const params = useParams()
    const quizId = params.id
  useEffect(() => {
    fetchQuestions()
  }, [quizId])

  const fetchQuestions = async () => {
    const res = await getQuizData(quizId)
    console.log('>>> getQuizData res', res)
  }
  console.log('params: ', params)
  return <div>DetailQuiz</div>
}

export default DetailQuiz

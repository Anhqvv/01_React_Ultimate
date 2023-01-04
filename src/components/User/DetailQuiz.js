import { useParams } from 'react-router-dom'
import { getQuizData } from '../sevices/apiService'
import { useEffect } from 'react'
import _ from 'lodash'

const DetailQuiz = () => {
  const params = useParams()
  const quizId = params.id
  useEffect(() => {
    fetchQuestions()
  }, [quizId])

  const fetchQuestions = async () => {
    const res = await getQuizData(quizId)
    // console.log('>>> getQuizData res', res.DT)
    if (res && res.EC === 0) {
        let raw = res.DT
        let questionDescription, image = null
      let data = _.chain(raw)
        .groupBy('id')
        .map((value, key) => {
          let answers = []
            value.forEach((item,index) => {
                if (index === 0) {
                    questionDescription = item.description;
                    image = item.image
                }
              answers.push(item.answers)
          })
          return { questonsId: key, answers,questionDescription, image }
        })
        .value()
      console.log('data groupBy: ', data)
    }
  }
  return <div>DetailQuiz</div>
}

export default DetailQuiz

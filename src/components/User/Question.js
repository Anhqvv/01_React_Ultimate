const Question = props => {
  const { dataQuiz, index } = props

  return (
    <>
      {dataQuiz.image && (
        <div className='image'>
          <img src={`data:image/png;base64,${dataQuiz.image}`} />
        </div>
      )}

      <div className='question'>
        Question {index + 1}:{dataQuiz.questionDescription}?
      </div>
      <div className='answer'>
        {dataQuiz.answers &&
          dataQuiz.answers.length > 0 &&
          dataQuiz.answers.map((answer, index) => {
            return (
              <div className='answer-child' key={index}>
                <>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      defaultValue=''
                      id='flexCheckDefault'
                    />
                    <label
                      className='form-check-label'
                      htmlFor='flexCheckDefault'
                    >
                      {answer.description}
                    </label>
                  </div>
                </>
              </div>
            )
          })}
      </div>
    </>
  )
}

export default Question

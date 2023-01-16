import './ManageQuiz.scss'
import Select from 'react-select'
import { useState } from 'react'
import { postCreateNewQuiz } from '../../../sevices/apiService'
import { toast } from 'react-toastify'

const options = [
  { value: 'EASY', label: 'EASY' },
  { value: 'MEDIUM', label: 'MEDIUM' },
  { value: 'HARD', label: 'HARD' }
]

const ManageQuiz = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState('EASY')
  const [image, setImage] = useState(null)

  const handleSubmitQuiz = async () => {
    //validate
    if (!name || !description) {
      toast.error('Name/Description is required')
      return
    }
    let res = await postCreateNewQuiz(description, name, type?.value, image)
    console.log('res postCreateNewQuiz : ', res)
    if (res && res.EC === 0) {
      toast.success(res.EM)
      setName('')
      setDescription('')
      setImage(null)
    } else {
      toast.error(res.EM)
    }
  }
  const handleChangeFile = e => {
    if (e.target && e.target.files && e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }
  return (
    <div className='quiz-container'>
      <div className='title'>ManageQuiz</div>
      <div>
        <fieldset className='border rounded-3 p-3'>
          <legend className='float-none w-auto px-3'>
            ManageQuiz Add New:
          </legend>
          <div className='form-floating mb-3'>
            <input
              type='text'
              className='form-control'
              placeholder='Name'
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <label>Name</label>
          </div>
          <div className='form-floating mb-3'>
            <input
              type='text'
              className='form-control'
              placeholder='Description'
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <label>Description</label>
          </div>
          <div>
            <Select defaultValue={type} onChange={setType} options={options} />
          </div>
          <div className='more-actions'>
            <label className='form-label my-2'>Upload Image</label>
            <input
              type='file'
              className='form-control'
              onChange={e => handleChangeFile(e)}
            />
          </div>
          <div>
            <button
              className='btn btn-warning mt-3'
              onClick={() => handleSubmitQuiz()}
            >
              Save
            </button>
          </div>
        </fieldset>
      </div>
      <div>Table Quiz</div>
    </div>
  )
}

export default ManageQuiz

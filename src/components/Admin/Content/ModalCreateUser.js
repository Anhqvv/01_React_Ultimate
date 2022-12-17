import axios from 'axios'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { FcPlus } from 'react-icons/fc'

const ModalCreateUser = props => {
  const { show, setShow } = props

  const handleClose = () => {
    setShow(false)
    setEmail('')
    setPassword('')
    setUsername('')
    setRole('')
    setImage('')
    setPreviewImage('')
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [role, setRole] = useState('USER')
  const [previewImage, setPreviewImage] = useState('')
  const [image, setImage] = useState('')

  const handlePreviewImage = event => {
    const linkImage = URL.createObjectURL(event.target.files[0])
    setPreviewImage(linkImage)
    setImage(event.target.files[0])
  }

  const handleSaveUser = async () => {
    // let data = {
    //   email: email,
    //   password: password,
    //   username: username,
    //   role: role,
    //   image: image
    // }
    const formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)
    formData.append('username', username)
    formData.append('role', role)
    formData.append('userImage', image)
    let res = await axios.post('http://localhost:8081/api/v1/participant', formData)
    console.log('data from POST:', res)
  }

  return (
    <>
      {/* <Button variant='primary' onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
        size='lg'
        centered
        className='modal-add-new'
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='row g-3'>
            <div className='col-md-6'>
              <label className='form-label'>Email</label>
              <input
                type='email'
                className='form-control'
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
            </div>
            <div className='col-md-6'>
              <label className='form-label'>Password</label>
              <input
                type='password'
                className='form-control'
                value={password}
                onChange={event => setPassword(event.target.value)}
              />
            </div>
            <div className='col-md-6'>
              <label className='form-label'>Username</label>
              <input
                type='text'
                className='form-control'
                value={username}
                onChange={event => setUsername(event.target.value)}
              />
            </div>
            <div className='col-md-4'>
              <label className='form-label'>Role</label>
              <select
                className='form-select'
                onChange={event => setRole(event.target.value)}
              >
                <option value='USER'>USER</option>
                <option value='ADMIN'>ADMIN</option>
              </select>
            </div>
            <div>
              <label className='form-label label-upload' htmlFor='labelUpload'>
                <FcPlus />
                Upload File Image
              </label>
              <input
                id='labelUpload'
                type='file'
                hidden
                onChange={event => handlePreviewImage(event)}
              />
            </div>
            <div className='col-12 image-preview'>
              {previewImage ? (
                <img src={previewImage} alt='' />
              ) : (
                <span>Preview Image</span>
              )}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={() => handleSaveUser()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalCreateUser

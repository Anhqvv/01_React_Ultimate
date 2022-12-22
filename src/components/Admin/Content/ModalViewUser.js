import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { FcPlus } from 'react-icons/fc'
import { toast } from 'react-toastify'
import _ from 'lodash'

const ModalUpdateUser = props => {
  const { show, setShow, fetchAllUser, dataView, setDataView } = props

  const handleClose = () => {
    setShow(false)
    setEmail('')
    setPassword('')
    setUsername('')
    setRole('')
    setImage('')
    setPreviewImage('')
    setDataView({})
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [role, setRole] = useState('USER')
  const [previewImage, setPreviewImage] = useState('')
  const [image, setImage] = useState('')

  //   const handlePreviewImage = event => {
  //     const linkImage = URL.createObjectURL(event.target.files[0])
  //     setPreviewImage(linkImage)
  //     setImage(event.target.files[0])
  //   }

  //Update
  useEffect(() => {
    if (!_.isEmpty(dataView)) {
      setEmail(dataView.email)
      setUsername(dataView.username)
      setRole(dataView.role)
      setImage('')
    }
    if (dataView.image) {
      setPreviewImage(`data:image/jpeg;base64,${dataView.image}`)
    }
  }, [dataView])
  return (
    <>
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
          <Modal.Title>Modal View A User</Modal.Title>
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
                disabled
              />
            </div>
            <div className='col-md-6'>
              <label className='form-label'>Password</label>
              <input
                type='password'
                className='form-control'
                value={password}
                onChange={event => setPassword(event.target.value)}
                disabled
              />
            </div>
            <div className='col-md-6'>
              <label className='form-label'>Username</label>
              <input
                type='text'
                className='form-control'
                value={username}
                onChange={event => setUsername(event.target.value)}
                disabled
              />
            </div>
            <div className='col-md-4'>
              <label className='form-label'>Role</label>
              <select
                className='form-select'
                onChange={event => setRole(event.target.value)}
                disabled
              >
                <option value='USER'>USER</option>
                <option value='ADMIN'>ADMIN</option>
              </select>
            </div>
            {/* <div>
              <input
                id='labelUpload'
                type='file'
                hidden
                onChange={event => handlePreviewImage(event)}
              />
            </div> */}
            <div className='col-12 image-preview'>
              {previewImage ? (
                <img src={previewImage} alt='' />
              ) : (
                <span>Preview Image</span>
              )}
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalUpdateUser

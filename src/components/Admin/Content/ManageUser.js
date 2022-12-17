import ModalCreateUser from './ModalCreateUser'
import './ManageUser.scss'
import { FcPlus } from 'react-icons/fc'
import { useState } from 'react'

const ManageUser = props => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className='manage-user-container'>
      <div className='title'>ManageUser</div>
      <div className='users-content'>
        <button
          className='btn btn-primary btn-add-new'
          onClick={() => setShowModal(true)}
        >
          <FcPlus /> Add new user
        </button>
        <div>User tables</div>
        <ModalCreateUser show={showModal} setShow={setShowModal} />
      </div>
    </div>
  )
}

export default ManageUser

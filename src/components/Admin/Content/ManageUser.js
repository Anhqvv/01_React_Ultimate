import ModalCreateUser from './ModalCreateUser'
import './ManageUser.scss'
import { FcPlus } from 'react-icons/fc'
import { useState, useEffect } from 'react'
import TableUser from './TableUser'
import { toast } from 'react-toastify'
import { getAllUsers } from '../../sevices/apiService'

const ManageUser = props => {
  const [showModal, setShowModal] = useState(false)
  const [listUser, setListUser] = useState([])

  useEffect(() => {
    fetchAllUser()
  }, [])
  const fetchAllUser = async () => {
    let res = await getAllUsers()
    if (res.EC === 0) {
      setListUser(res.DT)
    }
  }

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
        <div className='table-users-container'>
          <TableUser listUser={listUser} />
        </div>
        <ModalCreateUser
          show={showModal}
          setShow={setShowModal}
          fetchAllUser={fetchAllUser}
        />
      </div>
    </div>
  )
}

export default ManageUser

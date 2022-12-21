import ModalCreateUser from './ModalCreateUser'
import './ManageUser.scss'
import { FcPlus } from 'react-icons/fc'
import { useState, useEffect } from 'react'
import TableUser from './TableUser'
import { toast } from 'react-toastify'
import { getAllUsers } from '../../sevices/apiService'
import ModalUpdateUser from './ModalUpdateUser'
import ModalDeleteUser from './ModalDeleteUser'

const ManageUser = props => {
  //CREATE
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

  //Update
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false)
  const [dataUpdate, setDataUpdate] = useState([])

  const handleClickToUpdate = user => {
    setShowModalUpdateUser(true)
    setDataUpdate(user)
  }

  //Delete
  const [showModalDelete, setShowModalDelete] = useState(false)
  const [dataDelete, setDataDelete] = useState({})

  const handleClickToDelete = user => {
    setShowModalDelete(true)
    setDataDelete(user)
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
          <TableUser
            listUser={listUser}
            handleClickToUpdate={handleClickToUpdate}
            handleClickToDelete={handleClickToDelete}
          />
        </div>
        <ModalCreateUser
          show={showModal}
          setShow={setShowModal}
          fetchAllUser={fetchAllUser}
        />
        <ModalUpdateUser
          show={showModalUpdateUser}
          setShow={setShowModalUpdateUser}
          dataUpdate={dataUpdate}
          fetchAllUser={fetchAllUser}
          setDataUpdate={setDataUpdate}
        />
        <ModalDeleteUser
          setShow={setShowModalDelete}
          show={showModalDelete}
          dataDelete={dataDelete}
          fetchAllUser={fetchAllUser}
        />
      </div>
    </div>
  )
}

export default ManageUser

import ModalCreateUser from './ModalCreateUser'
import './ManageUser.scss'
import { FcPlus } from 'react-icons/fc'
import { useState, useEffect } from 'react'
import TableUser from './TableUser'
import TableUserPaginate from './TableUserPaginate'
import { toast } from 'react-toastify'
import { getAllUsers, getUsersWithPaginate } from '../../sevices/apiService'
import ModalUpdateUser from './ModalUpdateUser'
import ModalDeleteUser from './ModalDeleteUser'
import ModalViewUser from './ModalViewUser'

const ManageUser = props => {
  const LIMIT_USER = 6
  //Paginate
  const [pageCount, setPageCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  //CREATE
  const [showModal, setShowModal] = useState(false)
  const [listUser, setListUser] = useState([])

  useEffect(() => {
    // fetchAllUser()
    fetchAllUserWithPaginate(1)
  }, [])
  const fetchAllUser = async () => {
    let res = await getAllUsers()
    if (res.EC === 0) {
      setListUser(res.DT)
    }
  }
  const fetchAllUserWithPaginate = async page => {
    let res = await getUsersWithPaginate(page, LIMIT_USER)
    if (res.EC === 0) {
      setListUser(res.DT.users)
      setPageCount(res.DT.totalPages)
      console.log('object pageCount', pageCount)
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
  //View
  const [showModalView, setShowModalView] = useState(false)
  const [dataView, setDataView] = useState({})

  const handleClickToView = user => {
    setShowModalView(true)
    setDataView(user)
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
          {/* <TableUser
            listUser={listUser}
            handleClickToUpdate={handleClickToUpdate}
            handleClickToDelete={handleClickToDelete}
            handleClickToView={handleClickToView}
          /> */}
          <TableUserPaginate
            listUser={listUser}
            handleClickToUpdate={handleClickToUpdate}
            handleClickToDelete={handleClickToDelete}
            handleClickToView={handleClickToView}
            fetchAllUserWithPaginate={fetchAllUserWithPaginate}
            pageCount={pageCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage }
          />
        </div>
        <ModalCreateUser
          show={showModal}
          setShow={setShowModal}
          fetchAllUser={fetchAllUser}
          fetchAllUserWithPaginate={fetchAllUserWithPaginate}
          setCurrentPage={setCurrentPage }
        />
        <ModalUpdateUser
          show={showModalUpdateUser}
          setShow={setShowModalUpdateUser}
          dataUpdate={dataUpdate}
          fetchAllUser={fetchAllUser}
          setDataUpdate={setDataUpdate}
          fetchAllUserWithPaginate={fetchAllUserWithPaginate}
          currentPage={currentPage}

        />
        <ModalDeleteUser
          setShow={setShowModalDelete}
          show={showModalDelete}
          dataDelete={dataDelete}
          fetchAllUser={fetchAllUser}
          fetchAllUserWithPaginate={fetchAllUserWithPaginate}
          setCurrentPage={setCurrentPage }
        />
        <ModalViewUser
          show={showModalView}
          setShow={setShowModalView}
          dataView={dataView}
          setDataView={setDataView}
          
        />
      </div>
    </div>
  )
}

export default ManageUser

import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { deleteUser } from '../../sevices/apiService'
import { toast } from 'react-toastify'

const ModalDeleteUser = props => {
  const { show, setShow, dataDelete, fetchAllUser, fetchAllUserWithPaginate, setCurrentPage } =
    props

  const handleClose = () => setShow(false)

  const handleDeleteUser = async () => {
    let res = await deleteUser(dataDelete.id)
    if (res && res.EC === 0) {
      toast.success(res.EM)
      handleClose()
      // await fetchAllUser()
      setCurrentPage(1)
      await fetchAllUserWithPaginate(1)
    }
    if (res && res.EC !== 0) {
      toast.error(res.EM)
    }
  }

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
        size='lg'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal Delte User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are sure delete this user? Email = {''}
          <b>{dataDelete && dataDelete.email}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={() => handleDeleteUser()}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalDeleteUser

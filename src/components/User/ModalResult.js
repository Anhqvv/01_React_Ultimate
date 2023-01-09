import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const ModalResult = props => {
  const { show, setShow, dataResult } = props
  const handleClose = () => setShow(false)

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
          <Modal.Title>Modal Result</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>Total correct answers: {dataResult.countCorrect}</div>
          <div>Total question: {dataResult.countTotal}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Show Answers
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalResult

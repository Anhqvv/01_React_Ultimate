import ModalCreateUser from './ModalCreateUser'

const ManageUser = props => {
  return (
    <div className='manage-user-container'>
      <div>ManageUser</div>
      <div>
        <button>Add new user</button>
      </div>
      <div>
        User tables
        <ModalCreateUser />
      </div>
    </div>
  )
}

export default ManageUser

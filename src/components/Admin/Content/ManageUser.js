import ModalCreateUser from './ModalCreateUser'
import './ManageUser.scss'

const ManageUser = props => {
  return (
    <div className='manage-user-container'>
      <div className='title'>ManageUser</div>
      <div className='users-content'>
        <button>Add new user</button>
        <div>User tables</div>
        <ModalCreateUser />
      </div>
    </div>
  )
}

export default ManageUser

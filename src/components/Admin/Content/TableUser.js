const TableUser = props => {
  const { listUser, handleClickToUpdate } = props

  return (
    <>
      <table className='table table-bordered table-hover'>
        <thead>
          <tr>
            <th scope='col'>No.</th>
            <th scope='col'>Username</th>
            <th scope='col'>Email</th>
            <th scope='col'>Role</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td scope='row'>{item.id}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>
                    <button className='btn btn-secondary'>View</button>
                    <button
                      className='btn btn-info mx-3'
                      onClick={() => handleClickToUpdate(item)}
                    >
                      Update
                    </button>
                    <button className='btn btn-danger'>Delete</button>
                  </td>
                </tr>
              )
            })}

          {listUser && listUser.length === 0 && (
            <tr>
              <td colSpan='4'>Not found data</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default TableUser

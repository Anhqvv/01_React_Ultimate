import ReactPaginate from 'react-paginate'

const TableUserPaginate = props => {
  const {
    listUser,
    handleClickToUpdate,
    handleClickToDelete,
    handleClickToView,
    fetchAllUserWithPaginate,
    pageCount,
    currentPage,
    setCurrentPage
  } = props
  const handlePageClick = event => {
    fetchAllUserWithPaginate(+event.selected + 1)
    setCurrentPage(+event.selected + 1)
  }
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
                  <td>{item.id}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>
                    <button
                      className='btn btn-secondary'
                      onClick={() => handleClickToView(item)}
                    >
                      View
                    </button>
                    <button
                      className='btn btn-info mx-3'
                      onClick={() => handleClickToUpdate(item)}
                    >
                      Update
                    </button>
                    <button
                      className='btn btn-danger'
                      onClick={() => handleClickToDelete(item)}
                    >
                      Delete
                    </button>
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
      <div className='users-pagiante'>
        <ReactPaginate
          nextLabel='next >'
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel='< previous'
          pageClassName='page-item'
          pageLinkClassName='page-link'
          previousClassName='page-item'
          previousLinkClassName='page-link'
          nextClassName='page-item'
          nextLinkClassName='page-link'
          breakLabel='...'
          breakClassName='page-item'
          breakLinkClassName='page-link'
          containerClassName='pagination'
          activeClassName='active'
          renderOnZeroPageCount={null}
          forcePage={+currentPage - 1}
        />
      </div>
    </>
  )
}

export default TableUserPaginate

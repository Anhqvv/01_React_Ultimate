import axios from '../../utils/axiosCustomize'

const postCreateNewUser = (email, password, username, role, image) => {
  const formData = new FormData()
  formData.append('email', email)
  formData.append('password', password)
  formData.append('username', username)
  formData.append('role', role)
  formData.append('userImage', image)

  return axios.post('api/v1/participant', formData)
}

const getAllUsers = () => {
  return axios.get('api/v1/participant/all')
}

const putUpdateUser = (id, username, role, image) => {
  const formData = new FormData()
  formData.append('id', id)
  formData.append('username', username)
  formData.append('role', role)
  formData.append('userImage', image)

  return axios.put('api/v1/participant', formData)
}

const deleteUser = id => {
  return axios.delete('/api/v1/participant', {
    data: { id }
  })
}
const getUsersWithPaginate = (page, limit) => {
  return axios.get(`api/v1/participant?page=${page}&limit=${limit}`)
}

const postLogin = (email, password) => {
  return axios.post('api/v1/login', { email, password, delay: 5000 })
}
const postRegister = (email, password, username) => {
  return axios.post('api/v1/register', { email, password, username })
}
export {
  postCreateNewUser,
  getAllUsers,
  putUpdateUser,
  deleteUser,
  getUsersWithPaginate,
  postLogin,
  postRegister
}

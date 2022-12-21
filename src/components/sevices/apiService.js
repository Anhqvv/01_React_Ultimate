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
  return axios.get('http://localhost:8081/api/v1/participant/all')
}

const putUpdateUser = (id, username, role, image) => {
  const formData = new FormData()
  formData.append('id', id)
  formData.append('username', username)
  formData.append('role', role)
  formData.append('userImage', image)

  return axios.put('http://localhost:8081/api/v1/participant', formData)
}

const deleteUser = id => {
  return axios.delete('http://localhost:8081/api/v1/participant', {
    data: { id }
  })
}
export { postCreateNewUser, getAllUsers, putUpdateUser, deleteUser }

import { Routes, Route } from 'react-router-dom'
import App from './App'
import User from './components/User/User'
import Admin from './components/Admin/Admin'
import HomePage from './components/Home/HomePage'
import DashBoard from './components/Admin/Content/DashBoard'
import ManageUser from './components/Admin/Content/ManageUser'
import Login from './components/Auth/Login'
import Toastify from './components/Toastify'
import Register from './components/Auth/Register'
import DetailQuiz from './components/User/DetailQuiz'
import NotFound from './components/User/NotFound'
const Layout = () => {
  return (
    <>
      <Routes>
        <Route element={<App />} path='/'>
          <Route element={<HomePage />} index />
          <Route element={<User />} path='/users' />
        </Route>
        <Route element={<DetailQuiz />} path='/quiz/:id' />

        <Route element={<Admin />} path='/admins'>
          <Route element={<DashBoard />} index />
          <Route element={<ManageUser />} path='manage-users' />
        </Route>
        <Route element={<Login />} path='/login' />
        <Route element={<Register />} path='/register' />
        <Route element={<NotFound />} path='*' />
      </Routes>
      <Toastify />
    </>
  )
}

export default Layout

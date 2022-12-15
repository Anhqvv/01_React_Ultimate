import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import store from './redux/store'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import User from './components/User/User'
import Admin from './components/Admin/Admin'
import HomePage from './components/Home/HomePage'
import DashBoard from './components/Admin/Content/DashBoard'
import ManageUser from './components/Admin/Content/ManageUser'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route element={<App />} path='/'>
            <Route element={<HomePage />} index />
            <Route element={<User />} path='/users' />
          </Route>
          <Route element={<Admin />} path='/admins' >
            <Route element={<DashBoard />} index />
            <Route element={<ManageUser />} path='manage-users' />
            </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

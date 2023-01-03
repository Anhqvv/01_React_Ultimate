import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated)
  const account = useSelector(state => state.user.account)
  const navigate = useNavigate()
  const handleLogin = () => {
    navigate('/login')
  }

  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <NavLink className='navbar-brand' to='/'>
              React-Boostrap-App
            </NavLink>
            <NavLink className='nav-link ' to='/'>
              Home
            </NavLink>
            <NavLink className='nav-link' to='/users'>
              User
            </NavLink>
            <NavLink className='nav-link' to='/admins'>
              Admin
            </NavLink>
          </Nav>
          <Nav>
            {isAuthenticated === true ? (
              <NavDropdown title='Settings' id='basic-nav-dropdown'>
                <NavDropdown.Item>Log out</NavDropdown.Item>
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <button className='btn btn-login' onClick={() => handleLogin()}>
                  Log In
                </button>
                <button className='btn btn-secondary'>Log Out</button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header

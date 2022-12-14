import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { NavLink } from 'react-router-dom'

const Header = () => {
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
            <button className='btn btn-login'>Log In</button>
            <button className='btn btn-secondary'>Log Out</button>
            {/* <NavDropdown title='Settings' id='basic-nav-dropdown'>
              <NavDropdown.Item>Log in</NavDropdown.Item>
              <NavDropdown.Item>Log out</NavDropdown.Item>
              <NavDropdown.Item>Profile</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header

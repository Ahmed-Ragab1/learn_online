import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink,Link} from 'react-router-dom';


function Header() {
  const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')
    return (
      <Navbar bg="dark" expand="lg" className="navbar-dark">
      <Container>
        <Navbar.Brand href="/">Learn Online</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/all-courses">Courses</Nav.Link>
            <NavDropdown title="Teacher" id="basic-nav-dropdown">
              {teacherLoginStatus !='true' &&
              <>
                    <NavDropdown.Item href="/teacher-login">Login</NavDropdown.Item>
                    <NavDropdown.Item href="/teacher-register">Register</NavDropdown.Item>
                    </>
              }
              <NavDropdown.Item href="/teacher-logout">Logout</NavDropdown.Item>
              <NavDropdown.Item href="/teacher-dashboard">Dashboard</NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="/about">About Us</Nav.Link> */}
            <NavDropdown title="User" id="basic-nav-dropdown">
              <NavDropdown.Item href="/user-login">Login</NavDropdown.Item>
              <NavDropdown.Item href="/user-register">Register</NavDropdown.Item>
              <NavDropdown.Item href="/user-dashboard">Dashboard</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/user-logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }
  
  export default Header;
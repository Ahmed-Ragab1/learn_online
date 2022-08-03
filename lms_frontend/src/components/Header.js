import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from 'react-router-dom';


function Header() {
    return (
      <Navbar bg="dark" expand="lg" className="navbar-dark">
      <Container>
        <Navbar.Brand href="#home">Learn Online</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Courses</Nav.Link>
            <Nav.Link href="#link">Teachers</Nav.Link>
            <Nav.Link href="/user-login">User Login</Nav.Link>
            <Nav.Link href="/user-register">User Register</Nav.Link>

            {/* <Nav.Link href="/about">About Us</Nav.Link> */}


            <NavDropdown title="User" id="basic-nav-dropdown">
              <NavDropdown.Item href="/user-login">Login</NavDropdown.Item>
              <NavDropdown.Item href="/user-register">Register</NavDropdown.Item>
              <NavDropdown.Item href="/user-dashboard">Dashboard</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/user-register">Logout</NavDropdown.Item>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }
  
  export default Header;
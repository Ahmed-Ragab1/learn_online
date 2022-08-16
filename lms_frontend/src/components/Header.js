import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink,Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useEffect,useState} from 'react'



function Header() {
  const [searchString,setsearchString]=useState({
    'search':''
  });
  const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')
  const studentLoginStatus=localStorage.getItem('studentLoginStatus')
  const handleChange=(event)=>{
    // setsearchString({
    //   ...searchString,
    //   [event.target.name]:event.target.value
    // })

    setsearchString(event.target.value)
    
    
  }
  

  // const searchCourse =()=>{
  //   if(searchString.search!=''){
  //     window.location.href='/search/'+searchString.search
  //   }
  // }
  const searchCourse =()=>{
      if(searchString){
        window.location.href='/search/'+searchString.search
        localStorage.setItem('search',searchString)
      }
    }

    return (
      <Navbar bg="dark" expand="lg" className="navbar-dark">
      <Container>
        <Navbar.Brand href="/">Learn Online</Navbar.Brand>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search by course Title"
              className="me-2"
              aria-label="Search"
              name='search'
              onChange={handleChange}
            />
            <Button onClick={searchCourse} variant="outline-success" className='btn btn-warning'>Search</Button>
          </Form>

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
              {teacherLoginStatus =='true' &&
              <>
              <NavDropdown.Item href="/teacher-logout">Logout</NavDropdown.Item>
              <NavDropdown.Item href="/teacher-dashboard">Dashboard</NavDropdown.Item>
              </>
              }
            </NavDropdown>

        
            {/* <Nav.Link href="/about">About Us</Nav.Link> */}
            <NavDropdown title="User" id="basic-nav-dropdown">
            {studentLoginStatus !='true' &&
            <>
              <NavDropdown.Item href="/user-login">Login</NavDropdown.Item>
              <NavDropdown.Item href="/user-register">Register</NavDropdown.Item>
            </>
            }
            {studentLoginStatus =='true' &&
            <>
              <NavDropdown.Item href="/user-dashboard">Dashboard</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/user-logout">Logout</NavDropdown.Item>
            </>
          }
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }
  
  export default Header;
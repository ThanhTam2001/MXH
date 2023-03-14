import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.scss'
import NavDropdown from 'react-bootstrap/NavDropdown';
import ModelDangNhap from './ModelDangNhap';
import { useState } from 'react';
import ModelDangKy from './ModalDangKy';


const Header = () => {
    const [showdangnhap,setshowdangnhap] = useState(false);
    const [showdangky,setshowdangky] = useState(false);
    return(
        <div className='header-top'>

       
    <Navbar bg="light" expand="lg">
      <Container fluid>
     
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           
           
          </Nav>
          <div className='btn_signin'>
          
          <Button onClick={() => setshowdangnhap(true)} variant="primary">Sign in</Button>
          <ModelDangNhap
          show = {showdangnhap}
          setShow={setshowdangnhap}
          />
         <Button variant="warning" onClick={() => setshowdangky(true)}>dang ky</Button>
          </div>
         <ModelDangKy
         
         show = {showdangky}
         setShow={setshowdangky}
         />
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    )
}
export default Header;
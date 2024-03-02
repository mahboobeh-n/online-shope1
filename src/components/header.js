
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Header = () => {
    return (
                       
       

        <Navbar expand="lg" className="bg-info" >
        <Container>
         
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse  className=' justify-content-end'>
            <Nav className="me-auto">
            <Nav.Link href="#signin" >Signin</Nav.Link>
            <Nav.Link href="#logout" >Logout</Nav.Link>
            </Nav>
            </Navbar.Collapse>
              <NavDropdown title="Language" id="basic-nav-dropdown" >
                <NavDropdown.Item href="#English">English</NavDropdown.Item>
                <NavDropdown.Item href="#Persian"> Persian</NavDropdown.Item>
                 
              </NavDropdown>
           
          
        </Container>
      </Navbar>



    )
    

}
export default Header;







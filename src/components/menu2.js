
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Menu2 = () => {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark ">
      <Container fluid>
        {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='text-white'>Home</Nav.Link>

            <NavDropdown title="Shop" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Fation</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Electronic
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                All Image
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" >
              AboutUs
            </Nav.Link>
            <Nav.Link href="#action2">ContactUs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )

}
export default Menu2;

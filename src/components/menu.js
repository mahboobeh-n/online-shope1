import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import { ShopContext } from '../context/shopContext';
const Menu = () => {
  const {cartItems} = useContext(ShopContext)
  const itemCount = cartItems?.reduce((prev,current)=>{
    return prev + current.count
  },0)
  return (


    <Navbar className="bg-body-light">
      <Container>

        <Navbar.Brand href="#home">
          <img src="logo-1646028565.png" className="d-inline-block align-top" alt="React Bootstrap logo" />
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end" >
          <Nav >
            <NavLink to="/" className="mx-2" >Shop</NavLink>
            <NavLink to="/Cart" ><FontAwesomeIcon icon={faCartShopping} /></NavLink>
            {itemCount > 0 && <span>{itemCount}</span>}
          </Nav>
          
        </Navbar.Collapse>
        
    

      </Container>
    </Navbar>
    
  )
}
export default Menu;
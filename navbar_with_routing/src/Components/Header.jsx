import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import "./Header.modules.css"

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><img src='https://www.logohouse.org/images/ecommerce%20logo%20maker.png' width={"300px"} height={"100px"}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link><NavLink id='navlinkId' activeClassName="active" to={"/"}>Home</NavLink></Nav.Link>
          <Nav.Link><NavLink id='navlinkId' activeClassName="active" to={"/product"}>Product</NavLink></Nav.Link>
          <Nav.Link><NavLink id='navlinkId' activeClassName="active" to={"/cart"}>Cart</NavLink></Nav.Link>
          <Nav.Link><NavLink id='navlinkId' activeClassName="active" to={"/blog"}>Blog</NavLink></Nav.Link>
          <Nav.Link><NavLink id='navlinkId' activeClassName="active" to={"/about"}>About</NavLink></Nav.Link>
          <Nav.Link><NavLink id='navlinkId' activeClassName="active" to={"/contact"}>Contact</NavLink></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import "./Header.modules.css"

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><img src='https://ifp.world/wp-content/uploads/2021/05/Myntra-Logo.png' width={"100px"} height={"100px"}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link><NavLink id='navlinkId' activeClassName="active" to={"/"}>Home</NavLink></Nav.Link>
          <Nav.Link><NavLink id='navlinkId' activeClassName="active" to={"/about"}>About</NavLink></Nav.Link>
          <Nav.Link><NavLink id='navlinkId' activeClassName="active" to={"/product"}>Product</NavLink></Nav.Link>
          <Nav.Link><NavLink id='navlinkId' activeClassName="active" to={"/cart"}>Cart</NavLink></Nav.Link>
          <Nav.Link><NavLink id='navlinkId' activeClassName="active" to={"/blog"}>Blog</NavLink></Nav.Link>
          <Nav.Link><NavLink id='navlinkId' activeClassName="active" to={"/contact"}>Contact</NavLink></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
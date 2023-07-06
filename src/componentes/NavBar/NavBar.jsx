import CartWidget from "../CartWidget/CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import {Link, NavLink} from "react-router-dom"

const NavBar = () =>{
    return (

    <Navbar  expand="lg" className="navbar" >
      <Container>
        <Link to="/">
          <Navbar.Brand >GameStore</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <li>
              <NavLink to="/categoria/1">Home</NavLink>
            </li>
            <li>
              <NavLink to="/categoria/2">Destacados</NavLink>
            </li>
            <li>
              <NavLink to="/categoria/3">Favoritos</NavLink>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget/>
    </Navbar>
  );
}


export default NavBar
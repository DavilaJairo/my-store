import React, { useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [cantidadCarrito, setCantidadCarrito] = useState(0);

  const actualizarCantidadCarrito = (cantidad) => {
    setCantidadCarrito((prevCantidad) => prevCantidad + cantidad);
  };

  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Link to="/">
          <Navbar.Brand className="navbar-brand">
            <img src="/img/logo.png" alt="GameStore Logo" className="navbar-logo" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <li>
              <NavLink to="/categoria/1" className="nav-link">Nuevos</NavLink>
            </li>
            <li>
              <NavLink to="/categoria/2" className="nav-link">Destacados</NavLink>
            </li>
            <li>
              <NavLink to="/categoria/3" className="nav-link">Mas Vendidos</NavLink>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget itemCount={cantidadCarrito} />
    </Navbar>
  );
};

export default NavBar;

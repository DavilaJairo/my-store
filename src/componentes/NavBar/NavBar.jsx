import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">GameStore</Navbar.Brand>
                <Nav className="me-auto">
                        <Nav.Link href="#home">Categoria</Nav.Link>
                        <Nav.Link href="#features">Top</Nav.Link>
                        <Nav.Link href="#pricing">Favorite</Nav.Link>
                </Nav>
                <CartWidget/>
            </Container>
        </Navbar>
    )
}

export default NavBar



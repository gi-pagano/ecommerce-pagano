import { Container, Nav, Navbar} from "react-bootstrap";
import logo from '../../assets/img/logo.png';
import CartWidget from "../cart-icon/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link to="/">
                        <img
                            src={logo}
                            width="200"
                            height="90"
                            className="d-inline-block align-top border"
                            alt="logo"
                        />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#link">Todos</Nav.Link>
                        <Nav.Link href="#link">Avengers</Nav.Link>
                        <Nav.Link href="#link">X-Men</Nav.Link>
                        <Nav.Link href="#link">DC</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    );
};

export default NavBar;

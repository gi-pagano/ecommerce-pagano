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
                        <NavLink className="navlink" to="/"> Todos</NavLink>
                        <NavLink className="navlink" to="category/avengers">Avengers</NavLink>
                        <NavLink className="navlink" to="category/xmen">X-Men</NavLink>
                        <NavLink className="navlink" to="category/dc">DC</NavLink>
                    </Nav>
                </Navbar.Collapse>
                <NavLink to="/cart">
                    <CartWidget />
                </NavLink>    
            </Container>
        </Navbar>
    );
};

export default NavBar;

import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const CustomNav = () => {
  const location = useLocation();
  return (
    <Navbar expand="md" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link
              className={`nav-link ${
                location.pathname === "/offerte" ? "active" : ""
              }`}
              to="/about"
            >
              About me
            </Link>
            <Link
              className={`nav-link ${
                location.pathname === "/blog" ? "active" : ""
              }`}
              to="/blog"
            >
              Blog
            </Link>
            <Link
              className={`nav-link ${
                location.pathname === "/contacts" ? "active" : ""
              }`}
              to="/contacts"
            >
              Contacts
            </Link>
            <Link
              className={`nav-link ${
                location.pathname === "/cart" ? "active" : ""
              }`}
              to="/cart"
            >
              Cart
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default CustomNav;

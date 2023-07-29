import { useState } from "react";
import { Navbar, Nav, Container, Button, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const CustomNav = () => {
  const location = useLocation();

  const username = useSelector((state) => state.auth.username);
  const [showLinks, setShowLinks] = useState(false);

  return (
    <Navbar expand="md" className="bg-body-tertiary">
      <Container className="d-flex flex-row">
        {/* <Navbar.Brand href="#home">Logo</Navbar.Brand> */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setShowLinks(!showLinks)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Row
              className={`w-100 ${
                showLinks ? "flex-column" : "justify-content-between"
              }`}
            >
              <Col
                xs={11}
                md={11}
                className={`d-flex ${
                  showLinks
                    ? "flex-column h-50"
                    : "flex-row justify-content-around"
                }`}
              >
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

                {username && username !== "lory" ? (
                  <Link
                    className={`nav-link ${
                      location.pathname === "/favourites" ? "active" : ""
                    }`}
                    to="/favourites"
                  >
                    MyFav
                  </Link>
                ) : (
                  <Link className="d-none" />
                )}
              </Col>

              <Col
                xs={1}
                md={showLinks ? 11 : 1}
                className={`d-flex ${
                  showLinks ? "align-items-start" : "align-items-end"
                } ${showLinks ? "mt-3" : "mt-0"}`}
              >
                {!username ? (
                  <Link
                    className={`nav-link ${
                      location.pathname === "/authPage" ? "active" : ""
                    }`}
                    to="/authPage"
                  >
                    Login/Register
                  </Link>
                ) : (
                  <Button>Logout</Button>
                )}
              </Col>
            </Row>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default CustomNav;

import { useState } from "react";
import { Navbar, Nav, Container, Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logoutAction, resetFavouritesAction } from "../redux/actions";
import { useNavigate } from "react-router";

const CustomNav = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const username = useSelector((state) => state.auth.username);
  const [showLinks, setShowLinks] = useState(false);

  const handleLogout = () => {
    dispatch(logoutAction());
    dispatch(resetFavouritesAction());
    navigate("/");
  };
  return (
    <Navbar expand="md" className="bg-body-tertiary">
      <Container className="d-flex flex-row">
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
                xs={9}
                md={9}
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
                  About
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
                  /*  <Link className="d-none" /> */
                  <Link to="/" className="nav-link"></Link>
                )}
              </Col>

              <Col
                xs={3}
                md={showLinks ? 12 : 3}
                className={`d-flex ${
                  showLinks ? "align-items-start" : "align-items-end"
                } ${showLinks ? "mt-3" : "mt-0"}`}
              >
                {!username ? (
                  <Link
                    className={`nav-link bottone text-center${
                      location.pathname === "/authPage" ? "active" : ""
                    }`}
                    to="/authPage"
                  >
                    <Button>Login</Button>
                  </Link>
                ) : (
                  <Button
                    className="bottone text-center w-100"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
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

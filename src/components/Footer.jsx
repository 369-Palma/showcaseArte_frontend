import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { faHome, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGoogle,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-5 footer text-center text-lg-start bg-white text-muted">
      {/* Section: Social media */}
      <section className="social text-dark d-flex justify-content-center justify-content-lg-space-evenly p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Collegati con noi sui social network:</span>
        </div>

        <div>
          <Link
            to="https://www.facebook.com/loretana.iacobelli"
            target="_blank"
            className="me-4 text-reset"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </Link>
          <Link
            to="mailto:loretana.iacobelli@gmail.com"
            target="_blank"
            className="me-4 text-reset"
          >
            <FontAwesomeIcon icon={faGoogle} />
          </Link>
          <Link to="#" target="_blank" className="me-4 text-reset">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
        </div>
      </section>
      {/* Section: Social media */}

      {/* Section: Links */}

      <Container className="py-3">
        <Row className="d-flex flex-md-row flex-column justify-md-content-between text-center text-md-start">
          <Col xs={12} md={2} className="my-auto">
            <h6 className="text-uppercase fw-bold mb-4 pb-3">Contact me</h6>
          </Col>
          <Col
            xs={12}
            md={8}
            className="d-flex align-items-center mb-md-0 mb-4 "
          >
            <p className="mb-1">
              <FontAwesomeIcon icon={faHome} className="me-3" /> 28201 Bremen,
              Germany
            </p>
            <p className="mb-1">
              <FontAwesomeIcon icon={faEnvelope} className="me-3" />
              loretana.iacobelli@gmail.com
            </p>
            <p className="mb-0">
              <FontAwesomeIcon icon={faPhone} className="me-3" /> + 49 1575 1915
              364
            </p>
          </Col>
          <Col xs={12} md={2} className="mt-2">
            <small style={{ fontStyle: "italic" }}>
              Loretana Iacobelli &copy; {new Date().getFullYear()}
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

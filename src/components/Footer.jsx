import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { faHome, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGoogle,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mx-auto px-0 mt-5 footer text-center text-md-start text-muted">
      {/* Section: Social media */}
      <section
        className="social 
       text-dark d-flex justify-content-center justify-content-md-space-evenly p-4"
      >
        <div className="me-5 d-none d-md-block">
          <span className="text-black ">
            Collegati con noi sui social network:
          </span>
        </div>

        <div>
          <Link
            to="https://www.facebook.com/loretana.iacobelli"
            target="_blank"
            className=" text-reset"
          >
            <FontAwesomeIcon className="zoom icona" icon={faFacebookF} />
          </Link>
          <Link
            to="mailto:loretana.iacobelli@gmail.com"
            target="_blank"
            className="mx-4
             text-reset"
          >
            <FontAwesomeIcon className="zoom icona" icon={faGoogle} />
          </Link>
          <Link to="#" target="_blank" className=" text-reset">
            <FontAwesomeIcon className="zoom icona" icon={faInstagram} />
          </Link>
        </div>
      </section>
      {/* Section: Social media */}

      {/* Section: Links */}

      <Container className="py-3 mx-auto bordo">
        <Row className="d-flex flex-md-row flex-column justify-md-content-between text-center text-md-start">
          <Col xs={12} md={3} className="my-auto text-center">
            <h6 className="text-uppercase fw-bold mb-4 pb-3 icona">
              Contact me
            </h6>
          </Col>
          <Col xs={12} md={6} className="mb-md-0 mb-4">
            <p className="mb-1">
              <FontAwesomeIcon icon={faHome} className="me-3 icona" /> 28201
              Bremen, Germany
            </p>
            <p className="mb-1">
              <FontAwesomeIcon icon={faEnvelope} className="me-3 icona" />
              loretana.iacobelli@gmail.com
            </p>
            <p className="mb-0">
              <FontAwesomeIcon icon={faPhone} className="me-3 icona" /> + 49
              1575 1915 364
            </p>
          </Col>
          <Col xs={12} md={3} className="mt-2">
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

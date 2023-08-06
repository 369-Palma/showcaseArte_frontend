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
      <section className="">
        <Container className="text-center text-md-start mt-5">
          <Row className="mt-3">
            {/* <Col md={2} lg={2} xl={2} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Prodotti</h6>
              <p>
                <Link to="#" className="text-reset">
                  Pacchetti vacanza
                </Link>
              </p>
              <p>
                <Link to="#" className="text-reset">
                  Attività ed eventi
                </Link>
              </p>
              <p>
                <Link to="#" className="text-reset">
                  Gift cards
                </Link>
              </p>
              <p>
                <Link to="#" className="text-reset">
                  Attrezzature speciali
                </Link>
              </p>
            </Col>

            <Col md={3} lg={2} xl={2} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Link utili</h6>
              <p>
                <Link to="#" className="text-reset">
                  Prezzi
                </Link>
              </p>
              <p>
                <Link to="#" className="text-reset">
                  Settings
                </Link>
              </p>
              <p>
                <Link to="#" className="text-reset">
                  Ordini
                </Link>
              </p>
              <p>
                <Link to="#" className="text-reset">
                  Help
                </Link>
              </p>
            </Col>
            {/* Section: Links */}

            <Col md={4} lg={3} xl={3} className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact me</h6>
              <p>
                <FontAwesomeIcon icon={faHome} className="me-3" /> 28201 Bremen,
                Germany
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="me-3" />
                loretana.iacobelli@gmail.com
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} className="me-3" /> + 49 1575
                1915 364
              </p>
            </Col>
          </Row>

          <Row>
            <Col className=" col-12 text-xs-center text-lg-left mb-2 mt-2 copyright">
              <small style={{ fontStyle: "italic" }}>
                Loretana Iacobelli &copy; {new Date().getFullYear()}
              </small>
            </Col>
          </Row>
        </Container>
      </section>
    </footer>
  );
}

export default Footer;

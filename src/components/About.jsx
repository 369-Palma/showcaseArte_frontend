import { Col, Row } from "react-bootstrap";
import fotoLory from "../assets/img/fotoLory.jpeg";

const About = () => {
  return (
    <>
      <h2 className="mt-4">About the artist</h2>
      <Row xs={8} className="d-flex mx-auto my-4 px-5">
        <Col xs={12} md={6} className="mx-auto">
          <img
            src={fotoLory}
            alt="foto dell'artista"
            className="foto d-flex align-content-center my-3 mx-auto text-center w-75 "
          />
        </Col>
        <Col
          xs={12}
          md={6}
          className="mx-auto ps-xs-5 ps-md-0 py-md-5 /* w-sx-100 w-md-75 */"
        >
          <p className="ps-4">
            {" "}
            Hello there! I'm Loretana Iacobelli. <br />I started painting as a
            hobby but now it has become my greatest passion.
          </p>
        </Col>
      </Row>
    </>
  );
};
export default About;

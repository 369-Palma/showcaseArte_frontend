import { Col, Row } from "react-bootstrap";
import fotoLory from "../assets/img/fotoLory.jpg";
const About = () => {
  return (
    <>
      <h2 className="mt-4">About the artist</h2>
      <Row className="mx-auto my-4">
        <Col xs={12} md={4} className="mx-auto">
          <img
            src={fotoLory}
            alt="foto dell'artista"
            className="w-50 my-3 mx-auto text-center"
          />
        </Col>
        <Col xs={12} md={8} className="mx-auto">
          <p>
            {" "}
            Hello there! I'm Loretana Iacobelli. <br />I started painting as a
            hobby but now it has become my greatest passione.
          </p>
        </Col>
      </Row>
    </>
  );
};
export default About;

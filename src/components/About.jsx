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
            Loretana Iacobelli is a self-taught artist who lives in Bremen,
            Germany. <br />
            She started painting as a child, cultivating and renewing her
            passion over the decades. <br />
            Her paintings, which mainly depict seascapes and focus on natural
            elements such as waves, shells and clouds, are distinguished by the
            contrasts and the purity of the colours involved. The representation
            of nature in its pure simplicity is the mission of her art.
          </p>
        </Col>
      </Row>
    </>
  );
};
export default About;

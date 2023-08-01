import { Container, Row, Col } from "react-bootstrap";

const Blog = () => {
  return (
    <>
      <h2 className="mt-4 mb-5"> What's new? </h2>
      <Container>
        <Row
          xs={11}
          md={9}
          className=" px-auto d-flex flex-column border border-info align-content-space-around mx-1"
        >
          {" "}
          <h4 className="text-center">New exhibit!</h4>
          <Col md={6}>
            {" "}
            I am thrilled to invite you to my next exhibit. Here you'll have the
            chace to see my paintings in vivo. <br />
            See you there! <hr />
          </Col>
          <Col md={6}>Bari - via Putignani 79</Col>
          <Col md={6}>15/10/2023</Col>
        </Row>
      </Container>
    </>
  );
};

export default Blog;

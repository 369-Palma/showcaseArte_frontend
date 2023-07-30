import { Container, Row, Col } from "react-bootstrap";

const Blog = () => {
  return (
    <>
      <h2 className="mt-4"> What's new? </h2>
      <Container>
        <Row className="d-flex flex-row"> title </Row>
        <Col> description </Col>
        <Col>where</Col>
        <Col>when</Col>
      </Container>
      ;
    </>
  );
};

export default Blog;

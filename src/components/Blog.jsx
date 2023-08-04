import { Container, Row, Col } from "react-bootstrap";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { useSelector } from "react-redux";
import News from "./News";

const Blog = () => {
  const username = useSelector((state) => state.auth.username);

  return (
    <>
      <h2 className="mt-4 mb-5"> What's new? </h2>
      <Container>
        <Row>
          <Col xs={12} md={8} className="mx-auto">
            <News />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Blog;

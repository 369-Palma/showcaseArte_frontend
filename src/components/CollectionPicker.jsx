import { Container, Row, Col } from "react-bootstrap";
import "../styles/homepage.css";

const CollectionPicker = (props) => {
  const product = props.products;
  return (
    <Container>
      <Row className="d-flex flex-column ">
        <Col className="d-flex flex-row justify-content-center">
          <img
            src={product.img}
            alt={product.title}
            className="imgCollection w-100"
          />
        </Col>
        <Col className="d-flex justify-content-center">
          <p>
            {product.collection} {""} Collection
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default CollectionPicker;

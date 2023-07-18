import CollectionPicker from "./CollectionPicker";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const Collections = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <Container className="mx-auto my-auto d-flex flex-column">
      <Row className=" my-4">
        <h2 className="mb-5">Collections</h2>

        {products?.map((products) => (
          <Col xs={12} md={6} key={products?.id} className="my-3">
            <CollectionPicker products={products} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Collections;

import { Row, Col, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getByCollectionAction } from "../redux/actions";
import SingleProduct from "./SingleProduct";

const ChosenCollection = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.query);
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(getByCollectionAction(query.query));
    console.log(query);
  }, [query]);

  return (
    <>
      <Container className="my-auto">
        <Row className="justify-content-center">
          <h2 className="margineH2 mx-auto my-5 "> {query.query} Collection</h2>
          {products?.map((product) => (
            <Col xs={12} md={6} lg={4} key={product?.id}>
              <SingleProduct product={products} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ChosenCollection;

import { Row, Col, Container, Alert } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getByCollectionAction } from "../redux/actions";
import SingleProduct from "./SingleProduct";
import { FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "../styles/collection.css";
import { FaPlus } from "react-icons/fa";

const ChosenCollection = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.query);
  const products = useSelector((state) => state.products.products);
  const username = useSelector((state) => state.auth.username);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getByCollectionAction(query.query));
  }, [query]);

  const handleAddClick = (productId) => {
    console.log("Edit icon clicked for post ID:", productId);
    navigate(`/addProduct`);
  };

  return (
    <>
      <Container className="my-auto">
        <Row className="justify-content-center">
          <h2 className="mx-auto my-5 "> {query.query} Collection</h2>
          {!username ? (
            <Alert variant="warning">
              Login <Link to="/authPage">here</Link> to see your favourites list
            </Alert>
          ) : (
            <>
              {username === "lory" ? (
                <Row>
                  {" "}
                  <Col
                    className="d-flex justify-content-center mx-auto mb-5"
                    onClick={handleAddClick}
                  >
                    <FaPlus />
                  </Col>
                </Row>
              ) : (
                <Col className="d-none"></Col>
              )}
              <Alert className="d-none" />
            </>
          )}
          {products?.map((product) => (
            <Col className="stileTesto" xs={12} md={6} key={product?.id}>
              <SingleProduct product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ChosenCollection;

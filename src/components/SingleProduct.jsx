import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { scrollToTop } from "../redux/actions";
import "../styles/collection.css";
import { FaRegHeart } from "react-icons/fa";

const SingleProduct = (props) => {
  const navigate = useNavigate();

  const products = useSelector((state) => state.products.products);
  const product = props.product;
  console.log(products);

  return (
    <>
      <Container>
        <Row className="d-flex flex-column my-0">
          <Col>
            <Link to={"/detail/" + product?.id}>
              <img
                className="img-fluid"
                variant="top"
                src={product?.img}
                alt={product?.title}
              />
            </Link>
          </Col>
          <Row className="d-flex space-between mx-0 p-0">
            <Col>
              <p className="titoloQuadro">{product?.title}</p>
            </Col>
            <Col className="d-flex justify-content-end pt-1">
              {" "}
              <FaRegHeart />{" "}
            </Col>
          </Row>

          <Col>
            <p>{product?.price} €</p>
          </Col>
          <Col>
            <p>
              {" "}
              Size: {""} {product?.length} x {product?.width}{" "}
            </p>
          </Col>
          <Col>
            <p> {product?.description} </p>
          </Col>
        </Row>
        <Button
          className="bottone text-light text-primary fs-6"
          onClick={() => navigate("/details/" + products.id)}
        >
          DETTAGLI
        </Button>
      </Container>
    </>
  );
};

export default SingleProduct;

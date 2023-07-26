/* import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
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
      <Container className="my-3">
        <Row className="d-flex flex-column my-0">
          <Col className="">
            <Link className="" to={"/detail/" + product?.id}>
              <img
                className="imgCollection w-100 h-100"
                variant="top"
                src={product?.img}
                alt={product?.title}
              />
            </Link>
          </Col>
          <Row className="d-flex space-between mx-0 pt-4 ps-0">
            <Col>
              <p className="titoloQuadro">{product?.title}</p>
            </Col>
            <Col className="d-flex justify-content-end pt-1">
              {" "}
              <FaRegHeart className="w-25" />{" "}
            </Col>
          </Row>

          <Col>
            <p>{product?.price} €</p>
          </Col> */
{
  /*     <Col>
            <p>
              {" "}
              Size: {""} {product?.length} x {product?.width}{" "}
            </p>
          </Col>
          <Col>
            <p> {product?.description} </p>
          </Col> */
}
/*  </Row>
        <Button
          className="bottone text-light text-primary fs-6"
          onClick={() => navigate("/details/" + products.id)}
        >
          INFO
        </Button>
      </Container>
    </>
  );
};

export default SingleProduct;
 */

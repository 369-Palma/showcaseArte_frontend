import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router";

import { useSelector, useDispatch } from "react-redux";
import { scrollToTop } from "../redux/actions";
import "../styles/collection.css";
import { FaRegHeart } from "react-icons/fa";
import { setIdAction } from "../redux/actions";

const SingleProduct = (props) => {
  const navigate = useNavigate();

  const products = useSelector((state) => state.products.products);
  const product = props.product;
  console.log(products);
  const dispatch = useDispatch();

  const handleImageClick = (idProduct) => {
    console.log(
      "l'idProduct in SingleProduct è di tipo:",
      typeof idProduct,
      "l'idProduct in SingleProduct selezionato è:",
      idProduct
    );
    dispatch(setIdAction(idProduct));
    navigate("/details/" + idProduct.toString());
    scrollToTop();
  };
  return (
    <>
      <Container className="my-3">
        <Row className="d-flex flex-column my-0">
          <Col className="">
            <img
              className="imgCollection w-100 h-100"
              variant="top"
              src={product?.img}
              alt={product?.title}
              onClick={() => handleImageClick(product.id)}
            />
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
          </Col>{" "}
        </Row>
      </Container>
    </>
  );
};

export default SingleProduct;

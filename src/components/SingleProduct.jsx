import { Container, Row, Col, Alert } from "react-bootstrap";
import { useNavigate } from "react-router";

import { useSelector, useDispatch } from "react-redux";
import {
  addToFavAction,
  removeFromFavAction,
  scrollToTop,
} from "../redux/actions";
import "../styles/collection.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { setIdAction, ADD_TO_FAV, REMOVE_FROM_FAV } from "../redux/actions";
import { useEffect, useState } from "react";

const SingleProduct = (props) => {
  const navigate = useNavigate();
  const userName = useSelector((state) => state.user.name);
  const products = useSelector((state) => state.products.products);
  const product = props.product;
  const [isFav, setIsFav] = useState(false);
  console.log(products);
  const favourites = useSelector((state) => state.fav.content);
  console.log("favoriti all'inizio", favourites);
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

  const handleFavClick = () => {
    if (isFav === true) {
      dispatch(removeFromFavAction(product?.id));
      console.log("i miei preferiti sono:", favourites);
      setIsFav(!isFav);
    } else {
      dispatch(addToFavAction(product?.id));
      setIsFav(!isFav);
    }
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
              {isFav ? (
                <FaHeart
                  className="w-25"
                  color="red"
                  onClick={handleFavClick}
                />
              ) : (
                <FaRegHeart
                  className="w-25"
                  color="red"
                  onClick={handleFavClick}
                />
              )}
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

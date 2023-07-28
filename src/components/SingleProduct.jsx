import { Container, Row, Col, Alert } from "react-bootstrap";
import { useNavigate } from "react-router";

import { useSelector, useDispatch } from "react-redux";
import {
  setIdAction,
  addToFavAction,
  removeFromFavAction,
  resetFavouritesAction,
  scrollToTop,
} from "../redux/actions";
import "../styles/collection.css";
import { FaRegHeart, FaHeart, FaHeartCircle } from "react-icons/fa";
import { useEffect, useState } from "react";

const SingleProduct = (props) => {
  const navigate = useNavigate();
  const product = props.product;
  const username = useSelector((state) => state.auth.username);
  const favourites = useSelector((state) => state.fav.content);
  const isFav = favourites.some((favProduct) => favProduct.id === product.id);
  const [favorito, setFavorito] = useState(false);

  const dispatch = useDispatch();

  const handleImageClick = (idProduct) => {
    dispatch(setIdAction(idProduct));
    // navigate("/details/" + idProduct.toString());
    scrollToTop();
  };

  const handleFavClick = () => {
    if (favorito) {
      dispatch(removeFromFavAction(product.id));
      console.log("ho rimosso", product.id, "dai favoriti");
      setFavorito(false);
    } else {
      dispatch(addToFavAction(product.id));
      console.log("ho aggiunto", product.id, "ai favoriti");
      setFavorito(true);
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
              {favorito ? (
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
            <p>
              Size: {""} {product?.length} x {product?.width}
            </p>
            <p> {product?.description} </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SingleProduct;
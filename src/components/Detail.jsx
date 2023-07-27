import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles/collection.css";
import {
  removeFromFavAction,
  addToFavAction,
  getByIdAction,
  addToCartActionWithThunk,
} from "../redux/actions";

import { useParams } from "react-router-dom";
//import Register from "./Register";

const Detail = (props) => {
  const idProd = useSelector((state) => state.idProd.idProd);
  console.log(idProd);
  const prodObj = useSelector((state) => state.idProd.prodObj);
  const dispatch = useDispatch();
  const { id } = useParams();

  const favourites = useSelector((state) => state.fav.content);
  const isFav = favourites.some((favProduct) => favProduct.id === prodObj.id);

  const userName = useSelector((state) => state.user.name);

  const handleFavClick = () => {
    if (isFav) {
      dispatch(removeFromFavAction(prodObj.id));
      console.log("ho rimosso", prodObj.id, "dai favoriti");
    } else {
      dispatch(addToFavAction(prodObj));
      console.log("ho aggiunto", prodObj.id, "ai favoriti");
    }
  };

  useEffect(() => {
    console.log("L' id in Detail selezionato è:", id);
    dispatch(getByIdAction(id));
  }, [id]);

  if (prodObj === null) {
    // Puoi mostrare un messaggio di caricamento o qualsiasi altra cosa desideri durante il caricamento dei dati
    return <p>Loading...</p>;
  }

  return (
    <Container className="my-3">
      <Row className="d-flex flex-xs-row my-0">
        <Col>
          <img
            className="w-50"
            variant="top"
            src={prodObj?.img}
            alt={prodObj?.title}
          />
        </Col>
      </Row>
      <Row className="d-flex space-between mx-0 p-0">
        <Col>
          <p className="titoloQuadro">{prodObj?.title}</p>
        </Col>
        <Col className="d-flex justify-content-end pt-1">
          {isFav ? (
            <FaHeart
              className="w-25"
              color="red"
              onClick={() => handleFavClick()}
            />
          ) : (
            <FaRegHeart
              className="w-25"
              color="red"
              onClick={() => handleFavClick()}
            />
          )}
        </Col>
      </Row>
      <Row className="d-flex flex-column">
        <Col>
          <p>{prodObj?.price} €</p>
        </Col>
        <Col>
          <p>
            {" "}
            Size: {""} {prodObj?.length} x {prodObj?.width}{" "}
          </p>
        </Col>
        <Col>
          <p> {prodObj?.description} </p>
        </Col>
      </Row>
      {userName ? (
        <Button
          className="bottone text-light text-primary fs-6"
          onClick={() => {
            dispatch(addToCartActionWithThunk(prodObj));
          }}
        >
          ADD TO CART
        </Button>
      ) : (
        <>
          <Alert variant="warning">
            Log in to add this product to your cart
          </Alert>
        </>
      )}
    </Container>
  );
};

export default Detail;

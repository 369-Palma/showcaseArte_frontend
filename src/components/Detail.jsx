import { Container, Row, Col, Button, Alert, Spinner } from "react-bootstrap";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles/collection.css";
import {
  removeFromFavAction,
  addToFavAction,
  getByIdAction,
  addToCartAction,
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

  const username = useSelector((state) => state.auth.username);

  const handleFavClick = () => {
    if (isFav) {
      const indexToRemove = favourites.findIndex(
        (favProduct) => favProduct.id === prodObj.id
      );
      dispatch(removeFromFavAction(indexToRemove));
    } else {
      dispatch(addToFavAction(prodObj));
    }
  };

  useEffect(() => {
    console.log("L' id in Detail selezionato è:", id);
    dispatch(getByIdAction(id));
  }, [id]);

  return (
    <div className="my-5">
      {" "}
      {/*  {!username ? (
        <Alert variant="warning" className="mx-xs-2 mx-md-5 text-center">
          Login <Link to="/authPage">here</Link> to see your favourites list
        </Alert>
      ) : (
        <Alert className="d-none" />
      )} */}
      {prodObj === null ? (
        <Spinner animation="border" variant="light" />
      ) : (
        <Container className="my-3 mx-auto">
          <h4 className="titoloQuadro ps-xs-3 ps-md-5 ">{prodObj?.title}</h4>
          <Row className="d-flex flex-xs-row my-0 w-100">
            <Col xs={12} md={6}>
              <Row className="d-flex flex-column my-4 ">
                <Col className="mx-1" xs={12} md={10}>
                  <img
                    className="w-100"
                    variant="top"
                    src={prodObj?.img}
                    alt={prodObj?.title}
                  />
                </Col>
                <Col
                  xs={12}
                  md={10}
                  className="d-flex justify-content-end pt-1"
                >
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
            </Col>
            <Col xs={12} md={6} className="my-3">
              <Row className="d-flex flex-column align-content-space-around">
                <Col xs={12} md={6}>
                  <p>
                    Price: {""} {prodObj?.price} €
                  </p>
                </Col>
                <Col xs={12} md={6}>
                  <p>
                    {" "}
                    Size: {""} {prodObj?.length} x {prodObj?.width}{" "}
                  </p>
                </Col>
                <Col xs={12} md={6}>
                  <p> {prodObj?.description} </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      )}
      {!username ? (
        <Alert variant="warning" className="mx-xs-2 mx-md-5 text-center">
          Login <Link to="/authPage">here</Link> to see your favourites list
        </Alert>
      ) : (
        <Alert className="d-none" />
      )}
    </div>
  );
};

export default Detail;

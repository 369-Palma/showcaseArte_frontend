import { Container, Row, Col, Alert, Spinner } from "react-bootstrap";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HiOutlinePencilAlt } from "react-icons/hi";
import "../styles/collection.css";
import {
  removeFromFavAction,
  addToFavAction,
  getByIdAction,
} from "../redux/actions";

import { useParams } from "react-router-dom";
//import Register from "./Register";

const Detail = (props) => {
  const idProd = useSelector((state) => state.idProd.idProd);
  console.log(idProd);
  const prodObj = useSelector((state) => state.idProd.prodObj);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const handleEditClick = (productId) => {
    navigate(`/editProduct/${productId}`, {
      state: {
        img: encodeURIComponent(prodObj.img),
        title: prodObj.title,
        price: prodObj.price,
        length: prodObj.length,
        width: prodObj.width,
        description: prodObj.description,
        collection: prodObj.collection,
        client: prodObj.client,
        available: prodObj.available,
      },
    });
  };

  return (
    <div className="my-5">
      {" "}
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
                {username !== "lory" ? (
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
                ) : (
                  <Col md={10} className="d-flex justify-content-end pt-1">
                    <HiOutlinePencilAlt
                      onClick={() =>
                        handleEditClick(prodObj.id, prodObj.collection)
                      }
                      className="matita w-md-50"
                    />
                  </Col>
                )}
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
                    Size: {""} {prodObj?.length} x {prodObj?.width} cm
                  </p>
                </Col>
                <Col xs={12} md={6}>
                  <p>
                    {" "}
                    Available: {""} {prodObj?.available}
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

import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles/collection.css";
import {
  addToCartActionWithThunk,
  removeFromFavAction,
  addToFavActionWithAlert,
  getByIdAction,
} from "../redux/actions";
//import Register from "./Register";

const Detail = (props) => {
  const query = useSelector((state) => state.query);
  const product = useSelector((state) => state.products.products[query]);
  console.log(product);
  const favourites = useSelector((state) => state.fav.content);
  const isUserLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userName = useSelector((state) => state.user.name);
  const dispatch = useDispatch();
  const productSelected = getByIdAction(query);

  useEffect(() => {
    dispatch(getByIdAction(query.query));
    console.log(query);
  }, [query]);

  const [isFav, setIsFav] = useState(false);

  /* useEffect(() => {
    // Aggiorna lo stato 'isFav' in base ai preferiti
    setIsFav(favourites.includes(product.id));
  }, [favourites, product.id]);
  //console.log(products); */

  const handleFavIconClick = () => {
    if (isUserLoggedIn) {
      // Se l'utente è loggato, aggiungi o rimuovi il prodotto dai preferiti
      if (isFav) {
        dispatch(removeFromFavAction(product.id));
      } else {
        dispatch(addToFavActionWithAlert(product.id));
      }
    } else {
      // Se l'utente non è loggato, mostra l'avviso
      alert("Login here to add this product to your favourites list");
    }
  };

  return (
    <Container className="my-3">
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
            <FaRegHeart
              color="red"
              onClick={() => {
                handleFavIconClick();
              }}
            />
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
      {userName ? (
        <Button
          className="bottone text-light text-primary fs-6"
          onClick={() => {
            dispatch(addToCartActionWithThunk(product));
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

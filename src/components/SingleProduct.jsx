import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router";

import { useSelector, useDispatch } from "react-redux";
import {
  setIdAction,
  addToFavAction,
  removeFromFavAction,
  scrollToTop,
} from "../redux/actions";
import "../styles/collection.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { HiOutlinePencilAlt } from "react-icons/hi";
import "../styles/news.css";

const SingleProduct = (props) => {
  const navigate = useNavigate();
  const product = props.product;
  const username = useSelector((state) => state.auth.username);
  const favourites = useSelector((state) => state.fav.content);
  const isFav = favourites.some((favProduct) => favProduct.id === product.id);

  const dispatch = useDispatch();

  const handleEditClick = (productId) => {
    navigate(`/editProduct/${productId}`, {
      state: {
        img: encodeURIComponent(product.img),
        title: product.title,
        price: product.price,
        length: product.length,
        width: product.width,
        description: product.description,
        collection: product.collection,
        client: product.client,
        available: product.available,
      },
    });
  };

  const handleImageClick = (idProduct) => {
    dispatch(setIdAction(idProduct));
    navigate("/details/" + idProduct.toString());
    scrollToTop();
  };

  const handleFavClick = () => {
    if (isFav) {
      const indexToRemove = favourites.findIndex(
        (favProduct) => favProduct.id === product.id
      );
      dispatch(removeFromFavAction(indexToRemove));
    } else {
      dispatch(addToFavAction(product));
    }
  };

  return (
    <>
      <Container className="my-3">
        <Row className="d-flex flex-column my-0">
          <Col className="">
            <img
              className="imgCollection w-100 h-100"
              id="singleImg"
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
            {username !== "lory" ? (
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
            ) : (
              <Col className="d-flex justify-content-end pt-1">
                <HiOutlinePencilAlt
                  onClick={() =>
                    handleEditClick(product.id, product.collection)
                  }
                  className="matita w-md-50"
                />
              </Col>
            )}
          </Row>
          <Col>
            <p>{product?.price} €</p>
            <p>
              Size: {""} {product?.length} x {product?.width}
            </p>
            {/*  <p> {product?.description} </p> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SingleProduct;

import { useSelector, useDispatch } from "react-redux";
import { Container, Col, Row, Button, Alert } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { removeFromFavAction } from "../redux/actions/index.js";
import "../styles/favourites.css";
import { Link } from "react-router-dom";

const MyFavs = () => {
  const favourites = useSelector((state) => state.fav.content);

  const dispatch = useDispatch();

  return (
    <>
      <h2 className="mt-4"> My favourites </h2>
      <Container className="mb-5">
        <Row>
          {favourites.length === 0 ? (
            <p> Not favourites yet</p>
          ) : (
            <Col xs={12} md={6} className="text-start">
              <ul
                style={{ listStyle: "none" }}
                className="d-flex flex-column flex-xs-column flex-md-column"
              >
                {favourites.map((product, i) => (
                  <li key={i} className="my-4 d-flex flex-row me-5 w-100">
                    <FaTrash
                      color="red"
                      onClick={() => {
                        dispatch(removeFromFavAction(i));
                      }}
                    />
                    <img
                      className="imgSmall"
                      src={product?.img}
                      alt={product?.id}
                    />
                    <div className="d-flex flex-column ">
                      <p className="titolo">{product?.title}</p>
                      <p className="mini">{product?.price} €</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Col>
          )}
        </Row>
        <Row>
          <Col xs={12} className="font-weight-bold my-auto mx-auto">
            TOTAL:{" "}
            {favourites.reduce(
              (acc, currentValue) => acc + parseFloat(currentValue.price),
              0
            )}
            €
          </Col>
        </Row>
      </Container>

      <Row className="mx-auto justify-content-center">
        <Col className="d-flex justify-content-evenly">
          <Alert
            md={9}
            className="bgColor text-md-center mx-auto d-flex w-100 justify-content-center"
          >
            If you're interested in purchasing or you want more info on your
            favorite works, <br />
            or if you'd like to commission a painting, <br />
            please contact the artist.
          </Alert>
        </Col>
        <Row>
          <Col className="mx-5 d-flex justify-content-evenly rigaBottoni">
            <Link to="/contacts">
              <Button className="bottoneMyFav h-100 m-2">
                Contact the artist
              </Button>
            </Link>
            <Link to="/">
              <Button className="bottoneMyFav h-100 m-2">
                Back to Collections
              </Button>
            </Link>
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default MyFavs;

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
      <Container className="mb-5 justify-content-center align-items-center mx-auto my-4">
        <Row>
          {favourites.length === 0 ? (
            <p> Not favourites yet</p>
          ) : (
            <Col
              xs={12}
              md={6}
              className="text-start justify-content-center mx-auto"
            >
              <Row className="d-flex justify-content-center align-items-center mx-auto">
                <ul
                  style={{ listStyle: "none" }}
                  className="w-100 ps-0 d-flex flex-column flex-xs-column flex-md-column"
                >
                  {favourites.map((product, i) => (
                    <li key={i} className="my-4 d-flex flex-row me-5 ">
                      <Col xs={1}>
                        <FaTrash
                          className="w-100"
                          color="red"
                          onClick={() => {
                            dispatch(removeFromFavAction(i));
                          }}
                        />
                      </Col>
                      <Col className="w-100">
                        <img
                          className="imgSmall"
                          src={product?.img}
                          alt={product?.id}
                        />
                      </Col>
                      <Col>
                        <p className="titolo">{product?.title}</p>
                        <p className="mini">{product?.price} €</p>
                      </Col>
                    </li>
                  ))}
                </ul>
              </Row>
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
        <Col className="d-flex mx-auto px-0 ">
          <Alert className="bgColor justify-content-center text-md-center mx-auto d-flex w-100 ">
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

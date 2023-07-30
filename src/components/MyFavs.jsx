import { useSelector, useDispatch } from "react-redux";
import { Col, Row } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { removeFromFavAction } from "../redux/actions/index.js";
import "../styles/favourites.css";

const MyFavs = () => {
  const favourites = useSelector((state) => state.fav.content);

  const dispatch = useDispatch();

  return (
    <Row>
      <h2 className="mt-4"> My favourites </h2>;
      {favourites.length === 0 ? (
        <p> Not favourites yet</p>
      ) : (
        <Col xs={12} md={6} className="text-start">
          <ul style={{ listStyle: "none" }} className="d-flex flex-column">
            {favourites.map((product, i) => (
              <li
                key={i}
                //style={{ justifyContent: "space-evenly" }}
                className="my-4 d-flex flex-row me-5 w-100"
              >
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
                <p>{product?.title}</p>
                <p className="mx-5">{product?.price} €</p>
              </li>
            ))}
          </ul>
        </Col>
      )}
      <Row>
        <Col sm={12} className="font-weight-bold my-5 ms-5 ">
          TOTAL:{" "}
          {favourites.reduce(
            (acc, currentValue) => acc + parseFloat(currentValue.price),
            0
          )}
          €
        </Col>
      </Row>
    </Row>
  );
};

export default MyFavs;

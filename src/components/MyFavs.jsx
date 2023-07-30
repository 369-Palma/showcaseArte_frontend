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
        <Col sm={12}>
          <ul style={{ listStyle: "none" }}>
            {favourites.map((product, i) => (
              <li key={i} className="my-4 d-flex flex-row">
                <FaTrash
                  color="red"
                  onClick={() => {
                    // dispatch({ type: REMOVE_FROM_CART, payload: i });
                    dispatch(removeFromFavAction(i));
                  }}
                />
                <img
                  className="product-cover-small"
                  src={product?.imageUrl}
                  alt="product selected"
                />
                <p>{product?.title}</p>
                <p>{product?.price} €</p>
              </li>
            ))}
          </ul>
        </Col>
      )}
      <Row>
        <Col sm={12} className="font-weight-bold mb-3 ml-4">
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

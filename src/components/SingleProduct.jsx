import { Card, ListGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SingleProduct = (props) => {
  const navigate = useNavigate();

  const products = useSelector((state) => state.products.products);
  //const product = props.products;
  //const data = props.data;
  return (
    <>
      <Card className="offerta mb-4">
        <Link to={"/detail/" + products?.id}>
          <Card.Img
            className="img-fluid"
            variant="top"
            src={products?.img}
            alt="offerta vacanza"
          />
        </Link>
        <Card.Body>
          <Card.Title className="stileFamily">{products?.title}</Card.Title>
          <Card.Text>{products?.price} €</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            Size: {""} {products?.length} X {products?.width}
          </ListGroup.Item>
          <ListGroup.Item>{products?.description}</ListGroup.Item>
        </ListGroup>
        <Button
          className="bottone text-light text-primary fs-6"
          onClick={() => navigate("/details/" + products.id)}
        >
          DETTAGLI
        </Button>
      </Card>
    </>
  );
};

export default SingleProduct;

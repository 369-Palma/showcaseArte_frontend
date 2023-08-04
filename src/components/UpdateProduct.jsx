import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { updateSingleProductAction } from "../redux/actions/index";

const UpdateProduct = () => {
  const dispatch = useDispatch();
  const { prodId } = useParams();
  const navigate = useNavigate();

  const [updatedProd, setUpdatedProd] = useState({
    id: prodId,
    title: "",
    price: null,
    length: null,
    width: null,
    description: "",
    available: true,

    img: "",
  });

  const handleSubmit = async (e) => {
    console.log("updatedNews:", updatedProd);
    e.preventDefault();
    await dispatch(updateSingleProductAction(updatedProd));
    navigate("/collection/:query");
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setUpdatedProd((prevProd) => ({
      ...prevProd,
      [name]:
        name === "price" || name === "length" || name === "width"
          ? parseFloat(value)
          : name === "available"
          ? checked
          : value,
    }));
  };

  return (
    <Row>
      <Col xs={12} md={8} className="mx-auto my-auto">
        <Form
          onSubmit={handleSubmit}
          className="p-5 w-75 mx-auto my-5 border border-info "
        >
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Title:</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Title"
              autoComplete="off"
              name="title"
              value={updatedProd.title}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="price"
              name="price"
              value={updatedProd.price}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formLength">
            <Form.Label>Length</Form.Label>
            <Form.Control
              type="text"
              placeholder="length"
              name="length"
              value={updatedProd.length}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formWidth">
            <Form.Label>Width</Form.Label>
            <Form.Control
              type="text"
              placeholder="width"
              name="width"
              value={updatedProd.width}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Description"
              name="description"
              value={updatedProd.description}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>image url</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insert here the image url"
              name="img"
              value={updatedProd.img}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCheckbox">
            <Form.Check
              type="checkbox"
              label="Is available?"
              name="available"
              checked={updatedProd.available}
              onChange={handleChange}
            />
          </Form.Group>

          <Button
            className="bottone"
            id="submit"
            variant="primary"
            type="submit"
          >
            SALVA MODIFICHE
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default UpdateProduct;

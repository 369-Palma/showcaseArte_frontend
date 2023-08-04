import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
//import { updateSingleProductAction } from "../redux/actions/index";
import { addProductAction } from "../redux/actions/index";

const NewProduct = () => {
  const dispatch = useDispatch();

  //const navigate = useNavigate();

  const [newProd, setNewProd] = useState({
    title: "",
    price: undefined,
    length: undefined,
    width: undefined,
    description: "",
    collection: undefined,
    img: undefined,
    client: undefined,
    available: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", newProd.title);
    formData.append("price", newProd.price);
    formData.append("length", newProd.length);
    formData.append("width", newProd.width);
    formData.append("description", newProd.description);
    formData.append("collection", newProd.collection);
    formData.append("img", newProd.img);
    formData.append("available", newProd.available);

    dispatch(addProductAction(formData));
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setNewProd((prevProd) => ({
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
          className="p-5 w-75 mx-auto my-5 border border-info"
          encType="multipart/form-data"
        >
          {/* TITLE */}
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Title:</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Title"
              autoComplete="off"
              name="title"
              value={newProd.title}
              onChange={handleChange}
            />
          </Form.Group>

          {/* PRICE */}
          <Form.Group className="mb-3" controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="price"
              name="price"
              value={newProd.price}
              onChange={handleChange}
            />
          </Form.Group>

          {/* LENGTH */}
          <Form.Group className="mb-3" controlId="formLength">
            <Form.Label>Length</Form.Label>
            <Form.Control
              type="text"
              placeholder="length"
              name="length"
              value={newProd.length}
              onChange={handleChange}
            />
          </Form.Group>

          {/* WIDTH */}
          <Form.Group className="mb-3" controlId="formWidth">
            <Form.Label>Width</Form.Label>
            <Form.Control
              type="text"
              placeholder="width"
              name="width"
              value={newProd.width}
              onChange={handleChange}
            />
          </Form.Group>

          {/* DESCRIPTION */}
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Description"
              name="description"
              value={newProd.description}
              onChange={handleChange}
            />
          </Form.Group>

          {/* COLLECTION */}
          <Form.Group className="mb-3" controlId="formCollection">
            <Form.Label>Collection</Form.Label>
            <Form.Select
              name="collection"
              value={newProd.collection}
              onChange={handleChange}
            >
              <option value="">Select a collection</option>
              <option value="Flowers">Flowers</option>
              <option value="Oysters">Oysters</option>
              <option value="Seascapes">Seascapes</option>
              <option value="Custom">Custom</option>
            </Form.Select>
          </Form.Group>

          {/* IMAGE */}
          <Form.Group className="mb-3" controlId="formImage">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={(e) => {
                const selectedFile = e.target.files[0];
                const imageUrl = URL.createObjectURL(selectedFile);
                setNewProd({ ...newProd, img: imageUrl });
              }}
            />
          </Form.Group>
          {/* AVAILABLE */}
          <Form.Group className="mb-3" controlId="formCheckbox">
            <Form.Check
              type="checkbox"
              label="Is available?"
              name="available"
              checked={newProd.available}
              onChange={handleChange}
            />
          </Form.Group>

          <Button
            className="bottone"
            id="submit"
            variant="primary"
            type="submit"
          >
            ADD PRODUCT
          </Button>
        </Form>
      </Col>
    </Row>
  );
};
export default NewProduct;

import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateSingleNewsAction } from "../redux/actions/index";

const UpdateBlog = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [updatedNews, setUpdatedNews] = useState({
    id: postId,
    title: "",
    dove: "",
    quando: null,
    description: "",
    publicationDate: new Date().toISOString().slice(0, 10),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedNews((prevNews) => ({
      ...prevNews,
      [name]:
        name === "quando" || name === "publicationDate"
          ? formatDate(value)
          : value,
    }));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-CA");
  };

  const handleSubmit = async (e) => {
    console.log("updatedNews:", updatedNews);
    e.preventDefault();
    await dispatch(updateSingleNewsAction(updatedNews));
    navigate("/blog");
  };

  return (
    <Row>
      <Col xs={12} md={8} className="mx-auto my-auto">
        <Form
          onSubmit={handleSubmit}
          className="p-5 w-75 mx-auto my-5 border border-info "
        >
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Titolo:</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Titolo"
              autoComplete="off"
              name="title"
              value={updatedNews.title}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDove">
            <Form.Label>Dove</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Luogo"
              autoComplete="off"
              name="dove"
              value={updatedNews.dove}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formQuando">
            <Form.Label>Quando</Form.Label>
            <Form.Control
              type="date"
              required
              placeholder="Quando"
              autoComplete="off"
              name="quando"
              value={updatedNews.quando || ""}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Descrizione</Form.Label>
            <Form.Control
              as="textarea"
              required
              placeholder="Descrizione"
              autoComplete="off"
              name="description"
              value={updatedNews.description}
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

export default UpdateBlog;

import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { updateSingleNewsAction } from "../redux/actions/index";

const UpdateBlog = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();

  const title = location.state.title;
  const dove = location.state.dove;
  const quando = location.state.quando;
  const description = location.state.description;

  const [updatedNews, setUpdatedNews] = useState({
    id: postId,
    title: title,
    dove: dove,
    quando: quando,
    description: description,
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
            <Form.Label>Title:</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Title"
              autoComplete="off"
              name="title"
              value={updatedNews.title}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDove">
            <Form.Label>Where</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Address"
              autoComplete="off"
              name="dove"
              value={updatedNews.dove}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formQuando">
            <Form.Label>When</Form.Label>
            <Form.Control
              type="date"
              required
              placeholder="When"
              autoComplete="off"
              name="quando"
              value={updatedNews.quando || ""}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              required
              placeholder="Description"
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
            SAVE CHANGES
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default UpdateBlog;

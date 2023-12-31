import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import "../styles/homepage.css";
import { setQueryAction, scrollToTop } from "../redux/actions";

import { useNavigate } from "react-router";
import { useState } from "react";

const Collections = (props) => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const query = useSelector((state) => state.query);

  const navigate = useNavigate();

  const handleImageClick = (collectionName) => {
    dispatch(setQueryAction(collectionName));
    navigate("/collection/" + collectionName);
    scrollToTop();
  };

  // Funzione per trovare un oggetto in base al titolo specifico
  const findProductByTitle = (title) => {
    return products.find((product) => product.title === title);
  };

  const collectionsArray = [
    {
      collection: "Seascapes",
      product: findProductByTitle("Carribean morning"),
    },

    {
      collection: "Oysters",
      product: findProductByTitle("Oyster - light blue background"),
    },

    {
      collection: "Flowers",
      product: findProductByTitle("Flower carnival - sunflower & iris"),
    },

    {
      collection: "Commissioned",
      product: findProductByTitle("Commissioned by Daniel"),
    },
  ];

  console.log(collectionsArray);

  return (
    <Container className="p-0 mx-auto my-auto d-flex flex-column">
      <Row className="my-4 mx-auto">
        <h2 className="mb-5">Collections</h2>
        {collectionsArray.map((collection) => (
          <Col key={collection.collection} xs={12} md={6} className="my-3">
            <Row className="d-flex flex-column containerCollection">
              <Col className="d-flex flex-row justify-content-center">
                <img
                  src={collection?.product?.img}
                  alt={collection.collection}
                  className="imgCollection"
                  onClick={() => {
                    handleImageClick(collection.collection);
                  }}
                />
              </Col>
              <Col className="d-flex justify-content-center">
                <p className="mt-4 fs-5">{collection.collection}</p>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Collections;

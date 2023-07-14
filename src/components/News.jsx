import { Card, Button } from "react-bootstrap";

const News = (props) => {
  return (
    <Card>
      <Card.Header as="h5">{props.category}</Card.Header>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}.{}
          <p className="text-smaller"> {props.date} </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default News;

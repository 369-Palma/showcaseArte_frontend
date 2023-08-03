import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getNewsAction } from "../redux/actions";
import { useEffect } from "react";
import { HiOutlinePencilAlt } from "react-icons/hi";
import "../styles/news.css";

const News = (props) => {
  const news = useSelector((state) => state.news.news);
  const username = useSelector((state) => state.auth.username);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsAction());
  }, []);

  return (
    <Card className="w-100 newsBox ">
      {username === "lory" ? (
        <div className="d-flex justify-content-end pt-1">
          <HiOutlinePencilAlt className="matita" />
        </div>
      ) : (
        <div className="d-none"></div>
      )}
      {news.map((news) => (
        <Card.Body key={news.id} clasName="d-flex">
          <Card.Title className="mb-4">{news.title}</Card.Title>
          <Card.Text className="d-flex flex-column justify-content-space-around">
            <p> {news.description} </p>
            <p>{news.dove}</p>
            <p>{news.quando}</p>
          </Card.Text>
          <p className="smalltext pe-3">{news.publicationDate}</p>
        </Card.Body>
      ))}
    </Card>
  );
};

export default News;

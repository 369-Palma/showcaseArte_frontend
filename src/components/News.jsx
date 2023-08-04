import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getNewsAction } from "../redux/actions";
import { useEffect } from "react";
import { HiOutlinePencilAlt } from "react-icons/hi";
import "../styles/news.css";
import { useNavigate } from "react-router-dom";

const News = () => {
  const news = useSelector((state) => state.news.news);
  console.log("le news sono:", news);
  const username = useSelector((state) => state.auth.username);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getNewsAction());
  }, [dispatch]);

  const handleEditClick = (postId) => {
    console.log("Edit icon clicked for post ID:", postId);
    navigate(`/formBlog/${postId}`);
  };

  return (
    <Card className="w-100 newsBox ">
      {username === "lory" ? (
        <div className="d-flex justify-content-end pt-1">
          {news?.map((newsItem) => (
            <div key={newsItem.id} onClick={() => handleEditClick(newsItem.id)}>
              <HiOutlinePencilAlt className="matita" />
            </div>
          ))}
        </div>
      ) : (
        <div className="d-none"></div>
      )}
      {news?.map((news) => (
        <Card.Body key={news.id}>
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

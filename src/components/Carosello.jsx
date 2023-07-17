import { Carousel } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../styles/carosello.css";

const Carosello = () => {
  const products = useSelector((state) => state.products.products);
  console.log(products);

  return (
    <Carousel className="my-5 text-center mx-auto">
      {products.map((product) => (
        <Carousel.Item key={product.id} interval={3000}>
          <img className="imgs" src={product.img} alt={product.title} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Carosello;

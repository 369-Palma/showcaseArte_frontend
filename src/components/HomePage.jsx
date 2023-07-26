//import CustomNav from "./CustomNav";
import Carosello from "./Carosello";
import Collections from "./Collections";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductsAction } from "../redux/actions";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsAction());
  }, []);

  return (
    <>
      <Carosello className="col-sx-12 col-md-8" />
      <Collections />
    </>
  );
};

export default HomePage;

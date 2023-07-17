//import CustomNav from "./CustomNav";
import Carosello from "./Carosello";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductsAction } from "../redux/actions";

const HomePage = () => {
  const dispatch = useDispatch();
  console.log(dispatch);
  useEffect(() => {
    dispatch(getProductsAction());
  }, []);

  return (
    <>
      <Carosello className="col-sx-12 col-md-10" />
    </>
  );
};

export default HomePage;

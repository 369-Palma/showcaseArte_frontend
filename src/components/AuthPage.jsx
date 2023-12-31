import { Container, Row, Col } from "react-bootstrap";
import Register from "./Register";
import Login from "./Login";
import { useDispatch } from "react-redux";
import {
  setUsername,
  setPassword,
  setSuccessAction,
  setErrMsgAction,
} from "../redux/actions";
import { useEffect } from "react";

const AuthPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUsername(""));
    dispatch(setPassword(""));
    dispatch(setSuccessAction(false));
    dispatch(setErrMsgAction(""));
  }, [dispatch]);

  return (
    <Container className="mt-5 authForm flex-column" id="authenticationForm">
      <Row className="w-100 mx-auto">
        <Col xs={12} md={6} className="border border-black">
          <Register />
        </Col>
        <Col xs={12} md={6} className="border border-black">
          <Login />
        </Col>
      </Row>
    </Container>
  );
};
export default AuthPage;

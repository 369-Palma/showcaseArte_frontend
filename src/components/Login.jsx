import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { Col, Form, Button } from "react-bootstrap";
import {
  setUsername,
  setPassword,
  LOGOUT,
  logout,
  logoutAction,
} from "../redux/actions";
import MyFavs from "./MyFavs";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const username = useSelector((state) => state.auth.username);
  const password = useSelector((state) => state.auth.password);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const loginUrl = `http://localhost:8086/api/auth/login`;

  const userRef = useRef(null);
  const errRef = useRef("");

  //username

  const handleUsernameChange = (e) => {
    const { value } = e.target;
    dispatch(setUsername(value));
  };

  // password

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    dispatch(setPassword(value));
  };

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validazione dei campi di input
    if (!username || !password) {
      setErrMsg("Insert username and password");
      return;
    }

    //fetch

    try {
      const response = await fetch(loginUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();

      console.log(data);
      console.log(data.accessToken);
      console.log(JSON.stringify(data));

      setSuccess(true);
      /* dispatch(setUsernameAction(""));
      dispatch(setPasswordAction("")); */
    } catch (error) {
      if (error.response?.status === 409) {
        setErrMsg("Server error occurred");
      } else if (error?.response) {
        setErrMsg("Login was unsuccessful!");
      }
      errRef.current?.focus();
    }
    if (success === true) {
      navigate("/favourites");
    }
  };
  return (
    <>
      <section>
        <Col className="titolo txt-center">
          <p className="ms-5 pt-3 ">Access to you private area</p>
        </Col>
        <p
          ref={errRef}
          className={errMsg ? "errMsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h4 className="ms-5 mb-3 text-center"> Login </h4>

        <Form onSubmit={handleSubmit} className="px-5 ">
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Username"
              autoComplete="off"
              /* ref={usernameRef} */
              onChange={(e) => handleUsernameChange(e)}
              value={username}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              required
              placeholder="Password"
              autoComplete="off"
              onChange={(e) => handlePasswordChange(e)}
              value={password}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCheckbox">
            <Form.Check
              type="checkbox"
              label="Check me out"
              onClick={handleLogout}
            />
          </Form.Group>
          <Button
            className="bottone"
            id="submit"
            variant="primary"
            type="button"
            onClick={handleSubmit}
          >
            LOGIN
          </Button>
        </Form>
        {/* <p className="mt-4">
          Are you new here? <br />
          <Link to="/register"> Sign in </Link>
        </p> */}
      </section>
    </>
  );
};

export default Login;

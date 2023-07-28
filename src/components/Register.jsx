import { useDispatch, useSelector } from "react-redux";
import {
  setUsername,
  setValidUsername,
  setEmail,
  setValidEmail,
  setPassword,
  setValidPassword,
  setMatchPassword,
  registerUser,
  setSuccessAction,
  setErrMsgAction,
} from "../redux/actions";
import { useEffect, useRef, useState } from "react";
import { USER_REGEX, EMAIL_REGEX, PWD_REGEX } from "../redux/actions";
import { Col, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faXmark,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  const dispatch = useDispatch();

  /* username */
  const username = useSelector((state) => state.auth.username);
  const validUsername = useSelector((state) => state.auth.validUsername);

  /* email */
  const email = useSelector((state) => state.auth.email);
  const validEmail = useSelector((state) => state.auth.validEmail);

  /* password */
  const password = useSelector((state) => state.auth.password);
  const validPassword = useSelector((state) => state.auth.validPassword);

  /* match password */
  const matchPwd = useSelector((state) => state.auth.matchPwd);
  const validMatch = useSelector((state) => state.auth.validMatch);

  /* success */
  const success = useSelector((state) => state.auth.success);

  /* errMsg */
  const errMsg = useSelector((state) => state.auth.errMsg);

  const [userFocus, setUserFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const userRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const errRef = useRef();

  const registerUrl = `http://localhost:8086/api/auth/register`;
  //useEffect username
  useEffect(() => {
    const result = USER_REGEX.test(username);
    dispatch(setValidUsername(result));
  }, [dispatch, username]);

  const handleUsernameChange = (e) => {
    const { value } = e.target;
    dispatch(setUsername(value));
  };

  //useEffect email
  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    dispatch(setValidEmail(result));
  }, [dispatch, email]);

  const handleEmailChange = (e) => {
    const { value } = e.target;
    dispatch(setEmail(value));
  };

  //useEffect password
  useEffect(() => {
    const result = PWD_REGEX.test(password);
    dispatch(setValidPassword(result));
  }, [dispatch, password]);

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    dispatch(setPassword(value));
  };

  //matchPwd
  const handleMatchPasswordChange = (e) => {
    const { value } = e.target;
    dispatch(setMatchPassword(value));
  };

  //useEffect focus
  useEffect(() => {
    userRef.current.focus();
  }, []);

  /* Fetch Registrazione */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password || !matchPwd) {
      dispatch(setErrMsgAction("Please fill in all the required fields"));
      return;
    }

    try {
      const response = await fetch(registerUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      console.log(data);
      if (data.success) {
        dispatch(setSuccessAction(true));
        dispatch(setUsername(""));
        dispatch(setPassword(""));
        dispatch(setEmail(""));
        dispatch(setMatchPassword(""));
      } else {
        dispatch(setSuccessAction(false));
        dispatch(setErrMsgAction(data.message));
      }
    } catch (error) {
      dispatch(setErrMsgAction("There was an error contacting the server"));
      dispatch(setSuccessAction(false));
    }
    //dispatch(LOGIN_SUCCESS);
  };

  return (
    <>
      <Col xs={12} className="authForm mx-auto">
        {success ? (
          <Link to="/login">
            <Alert color="success">
              {" "}
              You are successfully signed in. Click here to login session.
            </Alert>
          </Link>
        ) : (
          <>
            <p
              ref={errRef}
              className={errMsg ? "errMsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
          </>
        )}
        {/* <p
          ref={errRef}
          className={errMsg ? "errMsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p> */}
        <Col className="titolo txt-center">
          <p className="ms-5 ">Create a new account here</p>
        </Col>
        <h4 className="ms-5 mb-3 text-center"> Register </h4>
        {/* USERNAME FIELD */}
        <Form onSubmit={handleSubmit} className="p-3 w-75 mx-auto">
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>
              Username:
              <span className={validUsername ? "valid" : "d-none"}>
                <FontAwesomeIcon icon={faCheck} style={{ color: "#00ff00" }} />
              </span>
              <span
                className={validUsername || !username ? "d-none" : "invalid"}
              >
                <FontAwesomeIcon icon={faXmark} style={{ color: "#ff0000" }} />
              </span>
            </Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Username"
              //id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => handleUsernameChange(e)}
              aria-invalid={validUsername ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <p
              id="uidnote"
              className={
                userFocus && username && !validUsername
                  ? "instructions"
                  : "d-none"
              }
            >
              <FontAwesomeIcon
                icon={faCircleInfo}
                style={{ color: "#0dcaf0" }}
              />
              Username length must be between 4 and 24 characters. <br />
              It must starts with a letter.
            </p>
          </Form.Group>

          {/* EMAIL */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              Email:
              <span className={validEmail ? "valid" : "d-none"}>
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ color: "#00ff00" }}
                  className="ms-2"
                />
              </span>
              <span className={validEmail || !email ? "d-none" : "invalid"}>
                <FontAwesomeIcon icon={faXmark} style={{ color: "#ff0000" }} />
              </span>
            </Form.Label>
            <Form.Control
              type="email"
              required
              placeholder="Email"
              ref={emailRef}
              autoComplete="off"
              onChange={(e) => handleEmailChange(e)}
              aria-invalid={validEmail ? "false" : "true"}
              aria-describedby="emailNote"
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />
            <p
              id="emailNote"
              className={
                emailFocus && email && !validEmail ? "instructions" : "d-none"
              }
            >
              <FontAwesomeIcon
                icon={faCircleInfo}
                style={{ color: "#0dcaf0" }}
              />
              Insert a valid email address
            </p>
          </Form.Group>

          {/* PASSWORD */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              Password:
              <span className={validPassword ? "valid" : "d-none"}>
                <FontAwesomeIcon icon={faCheck} style={{ color: "#00ff00" }} />
              </span>
              <span
                className={validPassword || !password ? "d-none" : "invalid"}
              >
                <FontAwesomeIcon icon={faXmark} style={{ color: "#ff0000" }} />
              </span>
            </Form.Label>
            <Form.Control
              type="password"
              required
              placeholder="Password"
              //id="password"
              ref={passwordRef}
              autoComplete="off"
              /*               onChange={(e) => setPasswordAction(e.target.value)}
               */
              onChange={(e) => {
                handlePasswordChange(e);
              }}
              aria-invalid={validPassword ? "false" : "true"}
              aria-describedby="passwordnote" //per fornire ulteriori indicazioni all'utente
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
            />
            <p
              id="passwordnote"
              className={
                passwordFocus && username && !validPassword
                  ? "instructions"
                  : "d-none"
              }
            >
              <FontAwesomeIcon
                icon={faCircleInfo}
                style={{ color: "#0dcaf0" }}
              />
              The password must be <br />
              min 8 characters long and <br />
              must contain at least one uppercase letter, one lowercase letter,{" "}
              <br />
              one special character among !, @, #, $ or % and one number.
            </p>
          </Form.Group>

          {/* METCHED PASSWORD */}

          <Form.Group className="mb-3" controlId="form">
            <Form.Label>
              Confirm Password:
              <span className={validMatch && matchPwd ? "valid" : "d-none"}>
                <FontAwesomeIcon icon={faCheck} style={{ color: "#00ff00" }} />
              </span>
              <span className={validMatch || !matchPwd ? "d-none" : "invalid"}>
                <FontAwesomeIcon icon={faXmark} style={{ color: "#ff0000" }} />
              </span>
            </Form.Label>
            <Form.Control
              type="password"
              required
              placeholder="Confirm Password"
              //id="password"
              ref={passwordRef}
              autoComplete="off"
              onChange={(e) => {
                handleMatchPasswordChange(e);
              }}
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p
              id="confirmnote"
              className={matchFocus && !validMatch ? "instructions" : "d-none"}
            >
              <FontAwesomeIcon
                icon={faCircleInfo}
                style={{ color: "#0dcaf0" }}
              />
              The password must match the previous password.
            </p>
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formBasicMatchPwd"
          ></Form.Group>
          <Button
            disabled={
              !validUsername || !validPassword || !validMatch ? true : false
            }
            variant="primary"
            type="submit"
          >
            SIGN ME IN
          </Button>
        </Form>
      </Col>
    </>
  );
};
export default Register;

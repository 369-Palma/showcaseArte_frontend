import { useDispatch, useSelector } from "react-redux";
import {
  setUsernameAction,
  setValidUsernameAction,
  setEmailAction,
  setValidEmailAction,
  setPasswordAction,
  setValidPasswordAction,
  setMatchPasswordAction,
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

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
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
    dispatch(setValidUsernameAction(result));
  }, [dispatch, username]);

  const handleUsernameChange = (e) => {
    const { value } = e.target;
    dispatch(setUsernameAction(value));
  };

  //useEffect email
  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    dispatch(setValidEmailAction(result));
  }, [dispatch, email]);

  const handleEmailChange = (e) => {
    const { value } = e.target;
    dispatch(setEmailAction(value));
  };

  //useEffect password
  useEffect(() => {
    const result = PWD_REGEX.test(password);
    dispatch(setValidPasswordAction(result));
  }, [dispatch, password]);

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    dispatch(setPasswordAction(value));
  };

  //matchPwd
  const handleMatchPasswordChange = (e) => {
    const { value } = e.target;
    dispatch(setMatchPasswordAction(value));
  };

  //useEffect focus
  useEffect(() => {
    userRef.current.focus();
  }, []);

  /* Fetch Registrazione */
  const handleSubmit = async (e) => {
    e.preventDefault();

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

      // Assuming the server returns JSON data in the response
      const data = await response.json();

      console.log(data);

      /* console.log(data.accessToken);
      console.log(JSON.stringify(data)); */

      setSuccess(true);
    } catch (error) {
      if (error.response?.status === 409) {
        setErrMsg("C'è stato un errore nel contattare il server");
      } else if (error?.response) {
        setErrMsg("Registrazione fallita!");
      }
      errRef.current?.focus();
    }
  };

  return (
    <>
      <Col md={6} className="authForm">
        {success ? (
          <Alert color="success">
            {" "}
            You are successfully signed in. Click here for visit your private
            session.
          </Alert>
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
        <Col className="titolo mx-auto">
          <p className="ms-5 ">Create a new account here</p>
        </Col>
        <h4 className="ms-5 mb-3"> Sign in</h4>
        {/* USERNAME FIELD */}
        <Form onSubmit={handleSubmit} className="p-3">
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
              L'username deve essere formato da 4 a 24 caratteri. <br />
              Deve iniziare con una lettera. <br />
              Può contenere caratteri speciali, maiuscole e numeri.
            </p>
          </Form.Group>

          {/* EMAIL */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              Email:
              <span className={validEmail ? "valid" : "d-none"}>
                <FontAwesomeIcon icon={faCheck} style={{ color: "#00ff00" }} />
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
              L'email deve essere valida. <br />
              Assicurati di inserire un indirizzo email corretto.
            </p>
          </Form.Group>

          {/* PASSWORD */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              Password
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
              La password deve contenere almeno 8 caratteri. <br />
              Deve contenere almeno una lettera maiuscola, <br />
              Deve contenere almeno una lettera minuscola <br />
              Deve contenere almeno un carattere speciale tra !, @, #, $ o %{" "}
              <br />
              Deve contenere almeno un numero.
            </p>
          </Form.Group>

          {/* METCHED PASSWORD */}

          <Form.Group className="mb-3" controlId="form">
            <Form.Label>
              Conferma Password
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
              placeholder="Conferma Password"
              //id="password"
              ref={passwordRef}
              autoComplete="off"
              onChange={(e) => {
                handleMatchPasswordChange(e);
              }}
              //onChange={(e) => setMatchPasswordAction(e.target.value)}
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote" //per fornire ulteriori indicazioni all'utente
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
              La password deve corrispondere alla password precedente.
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
            type="button "
          >
            REGISTRAMI
          </Button>
        </Form>
        <Col className="ms-5">
          <p className="mt-4">
            Hai già un account? <br />
            <Link to="/login">Accedi qui </Link>
          </p>
        </Col>
      </Col>
    </>
  );
};
export default Register;

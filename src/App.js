import logo from "./assets/img/logo.jpeg";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import HomePage from "./components/HomePage";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Container className="epizon-container">
        <Row>
          <Col>
            <img src={logo} alt="logo" />
          </Col>
        </Row>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<ContactForm />} />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;

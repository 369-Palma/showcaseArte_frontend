import logo from "./assets/img/logo.jpg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HomePage from "./components/HomePage";
import Cart from "./components/Cart";
import Blog from "./components/Blog";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import CustomNav from "./components/CustomNav";
import ChosenCollection from "./components/ChosenCollection";
import Detail from "./components/Detail";
import AuthPage from "./components/AuthPage";
import MyFavs from "./components/MyFavs";
import Collections from "./components/Collections";
import UpdateBlog from "./components/UpdateBlog";
import UpdateProduct from "./components/UpdateProduct";
import NewProduct from "./components/NewProduct";
import React, { useState, useEffect } from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

function App() {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButtons(true);
      } else {
        setShowButtons(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <BrowserRouter>
      <CustomNav />
      <div className="containerLogo">
        <img
          src={logo}
          alt="logo"
          className="logo d-flex justify-content-center mx-auto w-100"
        />
      </div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<ContactForm />} />
        <Route path="/collection/:query" element={<ChosenCollection />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/details/:id" element={<Detail />} />
        <Route path="/authPage" element={<AuthPage />} />
        <Route path="/favourites" element={<MyFavs />} />
        <Route path="/formBlog/:postId" element={<UpdateBlog />} />
        <Route path="/editProduct/:prodId" element={<UpdateProduct />} />
        <Route path="/addProduct" element={<NewProduct />} />
      </Routes>
      <Container className="desktop-only">
        <Row className="justify-content-center">
          <Col className="scroll-buttons">
            <Button className="scroll-button" onClick={scrollToTop}>
              <FaArrowUp />
            </Button>
            <Button className="scroll-button" onClick={scrollToBottom}>
              <FaArrowDown />
            </Button>
          </Col>
        </Row>
      </Container>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

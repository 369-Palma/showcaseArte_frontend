import logo from "./assets/img/logo.jpg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

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

function App() {
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

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<ContactForm />} />
        <Route path="/collection/:query" element={<ChosenCollection />} />
        <Route path="/details/:id" element={<Detail />} />
        <Route path="/authPage" element={<AuthPage />} />
        <Route path="/favourites" element={<MyFavs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

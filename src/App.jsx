import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import Home from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetailPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <NavBar /> {/* Navbar siempre visible */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
      </Routes>

      <Footer /> {/* Footer siempre visible */}
    </Router>
  );
}

export default App;

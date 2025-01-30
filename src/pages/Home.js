import React from "react";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="container">
        <h2 className="text-center">Categorías Destacadas</h2>
        <ProductList />
      </div>
    </div>
  );
};

export default Home;

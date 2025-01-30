import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/ProductList.css";


import cazadora from "../assets/cazaorabiker.webp";
import borcegos from "../assets/Borcegos.webp";
import pulsera from "../assets/pulserapanora.webp";

const products = [
  { id: 1, name: "Cazadora Biker ZARA", price: "$175.000,00", image: cazadora },
  { id: 2, name: "Borcegos Dr. Martens", price: "$550.000,00", image: borcegos },
  { id: 3, name: "Pulsera Pandora", price: "$200.000,00", image: pulsera },
];

const ProductList = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  };

  return (
    <div className="product-carousel">
      <Slider {...settings}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Slider>
    </div>
  );
};

export default ProductList;

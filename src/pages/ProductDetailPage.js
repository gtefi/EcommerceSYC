import React from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductDetailPage.css";

import cazadora1 from "../assets/cazaorabiker.webp";
import cazadora2 from "../assets/cazaora2.webp";
import cazadora3 from "../assets/cazaora3.webp";

import borcegos1 from "../assets/Borcegos.webp";
import borcegos2 from "../assets/borcego2.webp";
import borcegos3 from "../assets/borcego3.webp";

import pulsera1 from "../assets/pulserapanora.webp";
import pulsera2 from "../assets/panora2.webp";
import pulsera3 from "../assets/panora3.webp";

const products = [
  {
    id: 1,
    name: "Cazadora Biker ZARA",
    price: "$175.000,00",
    images: [cazadora1, cazadora2, cazadora3],
    description: "Cazadora de cuero genuino, resistente al agua, con diseño moderno."
  },
  {
    id: 2,
    name: "Borcegos Dr. Martens",
    price: "$550.000,00",
    images: [borcegos1, borcegos2, borcegos3],
    description: "Borcegos de cuero premium con suela de goma antideslizante."
  },
  {
    id: 3,
    name: "Pulsera Moments Pandora",
    price: "$200.000,00",
    images: [pulsera1, pulsera2, pulsera3],
    description: "Pulsera de plata con detalles de piedras brillantes."
  }
];

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <p className="product-price">{product.price}</p>
      <p className="product-description">{product.description}</p>
      
      <div className="product-images">
        {product.images.map((img, index) => (
          <img key={index} src={img} alt={product.name} className="detail-image"/>
        ))}
      </div>
      
      <button onClick={() => window.history.back()} className="btn-back">
        Volver
      </button>
    </div>
  );
};

export default ProductDetailPage;
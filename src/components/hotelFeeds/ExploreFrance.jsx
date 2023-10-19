import React from "react";
import "./ExploreFrance.css";

export const ExploreFrance = ({ products }) => {
  return (
    <div className="explore-france">
      <div className="head">
        <h3 className="title">{products[0].title}</h3>
      </div>
      <div className="hotel-cards">
        {products.slice(1).map((product, index) => (
          <div className="product-card" key={index}>
            <div className="product-image">
              <img src={product.image || placeholderImage} alt={product.name} />
            </div>
            <div className="hotel-details">
              <h2>{product.name} </h2>
              <div className="location-rating">
                <p>{product.location}</p>
                <span>
                  <i className={product.icon}></i>
                  {product.rating}
                </span>
              </div>
              <p className="description">{product.description}</p>
              <p className="price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

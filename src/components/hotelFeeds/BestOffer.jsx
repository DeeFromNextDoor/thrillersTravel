import React, { useState } from "react";
import "./BestOffer.css";
import { bestOffers } from "../../assets/constants";

const BestOffer = ({ products }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="best-offer">
      <div className="head">
        <h3 className="title">{products[0].title}</h3>
        <button className="view-all" onClick={() => setShowAll(!showAll)}>
          {showAll ? "View Less" : "View All"}
        </button>
      </div>
      <div className="hotel-cards">
        {products.slice(1, showAll ? undefined : 6).map((product, index) => (
          <div className="hotel-card" key={index}>
            <div className="hotel-image">
              <img src={product?.image} alt={product.name} />
            </div>
            <div className="hotel-info">
              <div className="hotel-name">{product.name}</div>
              <div className="location">
                <i className="bi bi-geo-alt"></i>
                {product.location}
              </div>
              <div className="price">
                <p>
                  <span>{product.price}</span>
                </p>
                <i className={product.icon}></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestOffer;

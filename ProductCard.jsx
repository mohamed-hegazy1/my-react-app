import { useState } from "react";

function ProductCard({ product }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.title}
        className="product-image"
      />

      <div className="product-info">

        <h2>{product.title}</h2>

        <p className="category">
          {product.category}
        </p>

        <p className="price">
          ${product.price}
        </p>

        <p>
          ⭐ {product.rating}
        </p>

        {/* Ternary Operator */}
        <p className={product.inStock ? "in-stock" : "out-stock"}>
          {product.inStock ? "In Stock" : "Out of Stock"}
        </p>

        <button
          className="details-btn"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Hide Details" : "Show Details"}
        </button>

        {/* && Operator */}
        {product.inStock && (
          <button className="buy-btn">
            Buy Now
          </button>
        )}

        {/* Conditional rendering */}
        {showDetails && (
          <div className="details">
            <p>{product.description}</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default ProductCard;
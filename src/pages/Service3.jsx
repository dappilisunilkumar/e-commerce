
import { Link } from "react-router-dom";
import { ArrowLeft, Star } from "lucide-react";

const products = [
  {
    name: "Modern Table Lamp",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800",
  },
  {
    name: "Accent Chair",
    price: 4999,
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=800",
  },
  {
    name: "Decorative Vase",
    price: 799,
    image:
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800",
  },
];

function Service3() {
  return (
    <section className="section">
      <Link to="/services" className="back-link">
        <ArrowLeft size={17} /> All collections
      </Link>

      <span className="eyebrow">COLLECTION 03</span>
      <h2>Home & Living</h2>
      <p className="page-description">
        Bring warmth and personality into your living space.
      </p>

      <div className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={product.name}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <span className="product-tag">Home & Living</span>
            </div>

            <div className="product-info">
              <h3>{product.name}</h3>
              <div className="product-bottom">
                <strong>₹{product.price.toLocaleString("en-IN")}</strong>
                <span className="rating">
                  <Star size={14} fill="currentColor" /> 4.6
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Service3;

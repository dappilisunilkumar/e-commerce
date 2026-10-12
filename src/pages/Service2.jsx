
import { Link } from "react-router-dom";
import { ArrowLeft, Star } from "lucide-react";

const products = [
  {
    name: "Classic Sneakers",
    price: 1999,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
  },
  {
    name: "Everyday Backpack",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800",
  },
  {
    name: "Minimal Watch",
    price: 2299,
    image:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800",
  },
];

function Service2() {
  return (
    <section className="section">
      <Link to="/services" className="back-link">
        <ArrowLeft size={17} /> All collections
      </Link>

      <span className="eyebrow">COLLECTION 02</span>
      <h2>Fashion & Accessories</h2>
      <p className="page-description">
        Find your style with versatile everyday essentials.
      </p>

      <div className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={product.name}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <span className="product-tag">Fashion</span>
            </div>

            <div className="product-info">
              <h3>{product.name}</h3>
              <div className="product-bottom">
                <strong>₹{product.price.toLocaleString("en-IN")}</strong>
                <span className="rating">
                  <Star size={14} fill="currentColor" /> 4.7
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Service2;

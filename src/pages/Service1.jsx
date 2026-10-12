
import { Link } from "react-router-dom";
import { ArrowLeft, Star } from "lucide-react";

const products = [
  {
    name: "Wireless Headphones",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
  },
  {
    name: "Smart Watch",
    price: 3299,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
  },
  {
    name: "Digital Camera",
    price: 15999,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800",
  },
];

function Service1() {
  return (
    <section className="section">
      <Link to="/services" className="back-link">
        <ArrowLeft size={17} /> All collections
      </Link>

      <span className="eyebrow">COLLECTION 01</span>
      <h2>Electronics & Gadgets</h2>
      <p className="page-description">
        Useful technology and modern everyday essentials.
      </p>

      <div className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={product.name}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <span className="product-tag">Electronics</span>
            </div>

            <div className="product-info">
              <h3>{product.name}</h3>
              <div className="product-bottom">
                <strong>₹{product.price.toLocaleString("en-IN")}</strong>
                <span className="rating">
                  <Star size={14} fill="currentColor" /> 4.8
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Service1;

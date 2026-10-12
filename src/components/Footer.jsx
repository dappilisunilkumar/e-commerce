
import { Link } from "react-router-dom";
import { ShoppingBag, Heart, ArrowUpRight } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" className="brand footer-logo">
            <ShoppingBag size={24} />
            ShopSphere.
          </Link>

          <p>Discover more. Live better. Shop your way.</p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/profile">Profile</Link>
        </div>

        <Link to="/services" className="text-link">
          Explore store <ArrowUpRight size={17} />
        </Link>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} ShopSphere. All rights reserved.
        </p>

        <p>
          Crafted with <Heart size={14} className="heart-icon" /> using React
        </p>
      </div>
    </footer>
  );
}

export default Footer;


import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  ShoppingBag,
  Menu,
  X,
  UserRound,
} from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { to: "/", label: "Home", end: true },
    { to: "/services", label: "Services" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/profile", label: "Profile" },
  ];

  return (
    <header className="navbar">
      <div className="nav-container">
        <Link
          to="/"
          className="brand"
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand-icon">
            <ShoppingBag size={22} />
          </span>
          <span>
            ShopSphere<span className="brand-dot">.</span>
          </span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {link.label}
            </NavLink>
          ))}

          <Link
            to="/profile"
            className="nav-profile"
            aria-label="View profile"
            onClick={() => setMenuOpen(false)}
          >
            <UserRound size={19} />
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

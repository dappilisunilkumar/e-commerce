import { NavLink, Outlet } from "react-router-dom";
import { Headphones, Shirt, House, Layers } from "lucide-react";

function ServicesLayout() {
  return (
    <section className="services-page">
      <div className="services-banner">
        <span className="eyebrow">THE SHOPSPHERE EXPERIENCE</span>
        <h1>Explore our collections</h1>
        <p>Discover technology, personal style, and beautiful living.</p>
      </div>

      <div className="container services-container">
        <nav className="service-tabs">
          <NavLink to="/services" end>
            <Layers size={17} /> All Collections
          </NavLink>
          <NavLink to="/services/service1">
            <Headphones size={17} /> Electronics
          </NavLink>
          <NavLink to="/services/service2">
            <Shirt size={17} /> Fashion
          </NavLink>
          <NavLink to="/services/service3">
            <House size={17} /> Home & Living
          </NavLink>
        </nav>

        <Outlet />
      </div>
    </section>
  );
}

export default ServicesLayout;

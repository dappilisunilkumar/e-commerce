import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const collections = [
  {
    title: "Electronics",
    number: "01",
    path: "/services/service1",
    description: "Explore gadgets, headphones, and everyday technology.",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=900",
  },
  {
    title: "Fashion",
    number: "02",
    path: "/services/service2",
    description: "Discover footwear, accessories, and modern essentials.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900",
  },
  {
    title: "Home & Living",
    number: "03",
    path: "/services/service3",
    description: "Find decor and thoughtful touches for your home.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900",
  },
];

function Services() {
  return (
    <section className="section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">OUR COLLECTIONS</span>
          <h2>Explore something new</h2>
          <p>Choose a category to discover its products.</p>
        </div>
      </div>

      <div className="collection-grid">
        {collections.map((item) => (
          <article className="collection-card" key={item.number}>
            <Link to={item.path} className="collection-image">
              <img src={item.image} alt={item.title} />
              <span className="collection-number">{item.number}</span>
            </Link>

            <div className="collection-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <Link to={item.path} className="text-link">
                Discover collection <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
